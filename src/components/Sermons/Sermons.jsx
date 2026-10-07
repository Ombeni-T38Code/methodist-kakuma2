import { useEffect, useState } from "react";
import {
	BookOpen,
	Bookmark,
	Clock3,
	FileText,
	Headphones,
	Play,
	Share2,
	Sparkles,
	UserRound,
	Video,
	Volume2,
	X,
} from "lucide-react";
import "./Sermons.css";

const sermons = [
	{
		id: "1",
		type: "Video Sermon",
		tag: "Recent Sunday",
		title: "Standing Firm in Unshakable Faith",
		passage: "1 Corinthians 16:13-14",
		duration: "42 min",
		description:
			"A foundational teaching on holding onto divine hope and communal unity amid desert trials.",
		speaker: "Kakuma Pastoral Team",
		mediaType: "video",
		mediaUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
		notes:
			"Key Points & Outline:\n\n1. Be Watchful (v. 13a)\nVigilance in times of uncertainty and spiritual fatigue. Guard our minds with scriptural truths.\n\n2. Stand Fast in the Faith (v. 13b)\nStay rooted in prayer and community fellowship, holding to foundational doctrine during trials.\n\n3. Act Like Courageous Leaders (v. 13c)\nFind spiritual strength through the Holy Spirit and lead by example.\n\n4. Do Everything in Love (v. 14)\nLet unity and compassion be our witness to the world.",
	},
	{
		id: "2",
		type: "Audio Sermon",
		tag: "Midweek Message",
		title: "The Power of United Intercession",
		passage: "Acts 12:5-12",
		duration: "35 min",
		description:
			"Recorded live at the Kakuma Town Prayer Room, examining how fervent prayer dismantles chains.",
		speaker: "Prayer Ministry Leader",
		mediaType: "audio",
		mediaUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
		notes:
			"Summary & Key Takeaways:\n\nCorporate Prayer Shifts Circumstances\nWhen the early church prayed together earnestly for Peter, divine breakthroughs occurred despite heavy security and prison doors.\n\nPersistent Intercession\nFaith-filled prayer is continuous spiritual alignment with God's sovereign will.\n\nFreedom & Testimony\nBelievers unite with brokenness and undivided passion, trusting God to move in unexpected ways.",
	},
	{
		id: "3",
		type: "Bible Teaching",
		tag: "Discipleship Series",
		title: "Walking as Peacemakers in Christ",
		passage: "Matthew 5:9",
		duration: "15 min read",
		description:
			"Practical Christian principles for reconciliation, mutual honor, and communal harmony.",
		speaker: "Pastoral Teaching Elder",
		notes:
			'Expository Study: Matthew 5:9, “Blessed are the peacemakers...”\n\nPeace in the biblical context is not merely the absence of conflict, but the active presence of wholeness, justice, and restored relationships.\n\n1. The Call to Initiative\nPeacemaking means stepping across divides rather than waiting for others to act first.\n\n2. Humility in Communication\nListen intently before reacting; gracious speech builds bridges.\n\n3. Restorative Grace\nAs Christ’s ambassadors, practice forgiveness and reconciliation.',
	},
];

export default function Sermons() {
	const [savedIds, setSavedIds] = useState([]);
	const [activeSermon, setActiveSermon] = useState(null);
	const [notesSermon, setNotesSermon] = useState(null);
	const [toast, setToast] = useState("");

	useEffect(() => {
		const handleEscape = (event) => {
			if (event.key === "Escape") {
				setActiveSermon(null);
				setNotesSermon(null);
			}
		};

		document.addEventListener("keydown", handleEscape);
		return () => document.removeEventListener("keydown", handleEscape);
	}, []);

	useEffect(() => {
		document.body.style.overflow = activeSermon || notesSermon ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [activeSermon, notesSermon]);

	const toggleSaved = (id) => {
		setSavedIds((current) =>
			current.includes(id)
				? current.filter((savedId) => savedId !== id)
				: [...current, id],
		);
	};

	const shareSermon = async (sermon) => {
		const shareText = `${sermon.title} (${sermon.passage})`;

		try {
			if (navigator.share) {
				await navigator.share({ title: sermon.title, text: shareText });
			} else if (navigator.clipboard) {
				await navigator.clipboard.writeText(shareText);
			} else {
				throw new Error("Sharing is not available in this browser.");
			}
			setToast(navigator.share ? "Teaching shared." : "Teaching reference copied.");
		} catch (error) {
			if (error.name !== "AbortError") setToast("Unable to share this teaching.");
		}

		window.setTimeout(() => setToast(""), 2800);
	};

	return (
		<div className="sermons-page">
			<div className="sermons-container">
				<header className="sermons-scripture-banner">
					<span className="sermons-season-label">
						<Sparkles size={14} aria-hidden="true" />
						Scripture of the Season
					</span>
					<blockquote>
						“Your word is a lamp to my feet and a light to my path.”
					</blockquote>
					<p>Psalm 119:105</p>
				</header>

				<section className="sermons-library" aria-labelledby="sermons-title">
					<header className="sermons-library-header">
						<span>Spiritual Sustenance</span>
						<h1 id="sermons-title">Sermons &amp; Bible Teachings</h1>
						<p>Grow in God&apos;s Word through sound Biblical doctrine.</p>
					</header>

					<div className="sermons-grid">
						{sermons.map((sermon) => {
							const MediaIcon = sermon.mediaType === "video" ? Video : sermon.mediaType === "audio" ? Headphones : BookOpen;
							const ActionIcon = sermon.mediaType === "video" ? Play : sermon.mediaType === "audio" ? Volume2 : BookOpen;
							const isSaved = savedIds.includes(sermon.id);

							return (
								<article className="sermon-card" key={sermon.id}>
									<div className="sermon-card-content">
										<div className="sermon-card-meta">
											<span className="sermon-kind">
												<MediaIcon size={16} aria-hidden="true" />
												{sermon.type}
											</span>
											<div className="sermon-card-tools">
												<span className="sermon-tag">{sermon.tag}</span>
												<button
													className={`sermon-icon-button${isSaved ? " is-saved" : ""}`}
													type="button"
													aria-label={isSaved ? "Remove saved message" : "Save message"}
													aria-pressed={isSaved}
													onClick={() => toggleSaved(sermon.id)}
												>
													<Bookmark size={17} fill={isSaved ? "currentColor" : "none"} />
												</button>
											</div>
										</div>

										<div className="sermon-card-title-group">
											<button
												className="sermon-title-button"
												type="button"
												onClick={() => sermon.mediaType ? setActiveSermon(sermon) : setNotesSermon(sermon)}
											>
												{sermon.title}
											</button>
											<p className="sermon-passage">
												<span>Passage: {sermon.passage}</span>
												<span className="sermon-passage-divider" aria-hidden="true" />
												<span className="sermon-duration">
													<Clock3 size={13} aria-hidden="true" />
													{sermon.duration}
												</span>
											</p>
										</div>

										<p className="sermon-description">{sermon.description}</p>

										<div className="sermon-speaker">
											<UserRound size={15} aria-hidden="true" />
											<span>{sermon.speaker}</span>
										</div>
									</div>

									<footer className="sermon-card-footer">
										<button
											type="button"
											onClick={() => sermon.mediaType ? setActiveSermon(sermon) : setNotesSermon(sermon)}
										>
											<ActionIcon size={17} aria-hidden="true" />
											{sermon.mediaType === "video" ? "Watch Now" : sermon.mediaType === "audio" ? "Listen Now" : "Read Notes"}
										</button>
										{sermon.mediaType === "teaching" ? (
											<button type="button" onClick={() => shareSermon(sermon)}>
												<Share2 size={15} aria-hidden="true" />
												Share
											</button>
										) : (
											<button type="button" onClick={() => setNotesSermon(sermon)}>
												<FileText size={15} aria-hidden="true" />
												Notes
											</button>
										)}
									</footer>
								</article>
							);
						})}
					</div>
				</section>
			</div>

			{activeSermon && (
				<div className="sermon-overlay" onMouseDown={(event) => event.target === event.currentTarget && setActiveSermon(null)}>
					<section className="sermon-media-modal" role="dialog" aria-modal="true" aria-labelledby="media-modal-title">
						<header className="sermon-modal-header">
							<div>
								<span>{activeSermon.mediaType === "video" ? "Video Sermon" : "Audio Sermon"}</span>
								<h2 id="media-modal-title">{activeSermon.title}</h2>
								<p>Passage: {activeSermon.passage}</p>
							</div>
							<button type="button" aria-label="Close media player" onClick={() => setActiveSermon(null)}>
								<X size={21} />
							</button>
						</header>
						<div className="sermon-media-content">
							{activeSermon.mediaType === "video" ? (
								<video controls autoPlay src={activeSermon.mediaUrl}>
									Your browser does not support video playback.
								</video>
							) : (
								<div className="sermon-audio-player">
									<Headphones size={38} aria-hidden="true" />
									<p>{activeSermon.title}</p>
									<span>{activeSermon.speaker}</span>
									<audio controls src={activeSermon.mediaUrl}>
										Your browser does not support audio playback.
									</audio>
								</div>
							)}
						</div>
						<footer className="sermon-modal-footer">
							<span>{activeSermon.speaker}</span>
							<button type="button" onClick={() => {
								setNotesSermon(activeSermon);
								setActiveSermon(null);
							}}>
								<FileText size={15} aria-hidden="true" />
								View Study Notes
							</button>
						</footer>
					</section>
				</div>
			)}

			{notesSermon && (
				<div className="sermon-overlay sermon-drawer-overlay" onMouseDown={(event) => event.target === event.currentTarget && setNotesSermon(null)}>
					<aside className="sermon-notes-drawer" role="dialog" aria-modal="true" aria-labelledby="notes-title">
						<header className="sermon-notes-header">
							<div>
								<span>Study Notes &amp; Outline</span>
								<h2 id="notes-title">{notesSermon.title}</h2>
								<p>{notesSermon.passage} · {notesSermon.speaker}</p>
							</div>
							<button type="button" aria-label="Close study notes" onClick={() => setNotesSermon(null)}>
								<X size={21} />
							</button>
						</header>
						<div className="sermon-notes-body">
							<div className="sermon-summary-box">
								<h3><Sparkles size={15} aria-hidden="true" /> Teaching Summary</h3>
								<p>{notesSermon.description}</p>
							</div>
							<pre>{notesSermon.notes}</pre>
						</div>
						<footer className="sermon-notes-footer">
							<button type="button" onClick={() => shareSermon(notesSermon)}>
								<Share2 size={15} aria-hidden="true" />
								Share Notes
							</button>
							<button className="sermon-close-button" type="button" onClick={() => setNotesSermon(null)}>
								Close
							</button>
						</footer>
					</aside>
				</div>
			)}

			{toast && <div className="sermon-toast" role="status">{toast}</div>}
		</div>
	);
}
