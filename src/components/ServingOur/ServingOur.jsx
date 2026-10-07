import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import communityImage from "../../assets/brand/view/Community gathering and fellowship after Sunday service.jpg";
import "./ServingOur.css";

const outreachActivities = [
	"Evangelism & Witness",
	"Fellowship Gatherings",
	"Visiting People & Families",
	"Christian Service & Practical Aid",
	"Prayer Intercession",
	"Community Support",
	"Helping Vulnerable Members",
];

export default function ServingOur() {
	return (
		<section className="serving-section" aria-labelledby="serving-title">
			<div className="serving-layout">
				<div className="serving-copy">
					<p className="serving-eyebrow">Compassion &amp; Solidarity</p>
					<div className="serving-heading">
						<h2 id="serving-title">Serving Our Community</h2>
						<p>Faith in Action</p>
					</div>
					<p className="serving-description">
						In the heart of Kakuma, our church embodies Christ’s gentle hands
						and enduring comfort. We do not keep the grace within church walls;
						our calling extends to every household seeking hope, nourishment,
						and community dignity.
					</p>

					<ul className="serving-activities">
						{outreachActivities.map((activity) => (
							<li key={activity}>
								<span className="serving-check" aria-hidden="true">
									<Check size={13} strokeWidth={2.7} />
								</span>
								<span>{activity}</span>
							</li>
						))}
					</ul>

					<Link className="serving-cta" to="/ministries">
						<span>Learn About Our Outreach</span>
						<ArrowRight size={17} aria-hidden="true" />
					</Link>
				</div>

				<figure className="serving-visual">
					<img
						src={communityImage}
						alt="Members of the Kakuma community gathering after Sunday service"
						loading="lazy"
					/>
					<figcaption className="serving-caption">
						<span className="serving-location">
							<span aria-hidden="true" />
							Community in Kakuma
						</span>
						<blockquote>
							“Blessed are the merciful, for they will be shown mercy.”
						</blockquote>
						<cite>Matthew 5:7</cite>
					</figcaption>
				</figure>
			</div>
		</section>
	);
}
