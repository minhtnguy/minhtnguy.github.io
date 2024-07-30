"use client";

import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import React from "react";
import ProjectOverview from "../components/ProjectOverview";
import ContentSection from "../components/ContentSection";
import LargeText from "../components/LargeText";
import Image from "next/image";

export default function Test() {
	return (
		<main className="p-16 space-y-16">
			<ProjectOverview
				title="Careergram"
				description="Helping students develop deeper identities toward different career pathways with student reflection and AI analysis."
				img="/images/careergram/careergram.svg"
				alt="Project image"
				role={["Designer", "Developer"]}
				duration="June 2023 - September 2023"
				team={[
					"Jenny Han",
					"Sharon Ma",
					"Jessica Cai",
					"Minh Nguyen",
					"Advised by June Ahn",
				]}
				disciplines={[
					"User Experience",
					"Visual Identity",
					"Interaction Design",
					"Web Development",
				]}
			>
				<p>
					Careergram is a research project part of the UCI Design and
					Partnership Lab. The goal of Careergram is to help young people
					develop deeper identities toward career pathways by mapping out the
					aspects of experiences about careers, identity, and self around which
					young people develop their occupational identity over their lifetimes.
				</p>
				<p>
					During the summer of 2023, I had the opportunity to own the design
					process for Careergram as the sole designer on the team, where I
					designed interfaces for student survey reflections and AI insights.
				</p>
			</ProjectOverview>
			<ContentSection heading="Problem">
				Many young people face challenges when defining their occupational
				identity and will tend to seek career guidance from mentors. However, it
				is difficult to come up with effective questions and conversation
				starters to initiate conversations with their mentors. Additionally,
				mentors may struggle with accurately understanding students' needs and
				goals, making it difficult to offer proper guidance and advice.
			</ContentSection>
			<LargeText>
				How might we help young people develop deeper identities toward career
				pathways by fostering stronger connections between mentees and mentors?
			</LargeText>
			<ContentSection heading="Solution">
				Careergram uses short surveys to collect reflective data from students.
				These surveys are based on five practical measures defined by the AXCIS
				Project. The data is analyzed using AI to provide actionable insights
				and questions for students to discuss with their mentors. By doing so,
				this helps both mentors and mentees uncover information about career
				goals and values to provoke more engaging conversations.
			</ContentSection>
			<ContentSection heading="Refining the Survey Questions">
				We first focused on refining the survey questions based on the five
				practical measures to encourage better reflection from students and
				better analysis from the large language model.
			</ContentSection>
			<Image
				src="/images/careergram/miro.svg"
				alt="Miro board for brainstorming survey questions"
				width={1600}
				height={800}
			/>
			<ContentSection>
				<p>
					During this process, we acknowledged that our analysis is not meant to
					provide students with the answers, but rather to spur insights and
					conversation topics during in-person meetings, which led to including
					action items for students to pursue after reading their insights.
				</p>
				<p>
					Using the new survey questions, I began brainstorming different ways
					to visually display student insights.
				</p>
			</ContentSection>
			<Image
				src="/images/careergram/lofi.svg"
				alt="Lofi wireframes"
				width={1600}
				height={800}
			/>
			<ContentSection heading="Visual Identity">
				<p>
					For our brand's visual identity and design system, I focused on
					embodying a playful, bold, and fun spirit, drawing inspiration from
					tangrams typically found in the classroom. Our design system includes
					various colors, including those for our branding and individual
					practical measures.
				</p>
				<p>
					It was a point of emphasis to be clear and consistent with color usage
					to ensure color contrast meets the WCAG 2 AAA threshold throughout the
					designs. The design system was also based on Tailwind CSS and Tremor
					UI to allow for easy handoff to developers.
				</p>
			</ContentSection>
			<Image
				src="/images/careergram/style-tile.svg"
				alt="Style tile"
				width={1600}
				height={800}
			/>
			<ContentSection heading="Survey Inputs">
				<p>
					A key area of focus was making sure the survey inputs were clear and
					straightforward in order to get accurate information for data
					analysis. We wanted to ensure that the survey intake process was quick
					and easy, in order to reduce friction for students. The inputs varied
					from audio response, free response, and scale-based response.
				</p>
			</ContentSection>
			<Image
				src="/images/careergram/survey-inputs.svg"
				alt="Survey inputs"
				width={1600}
				height={800}
			/>
			<ContentSection heading="Call to Actions">
				<p>
					To communicate student insights, it was important that the information
					was presented in a clear and engaging format to make it easily
					understandable for both mentors and mentees. We also focused on the
					copywriting to incorporate a youthful and playful tone, catering to a
					young audience and increasing engagement for users as they read
					through their insights.
				</p>
			</ContentSection>
			<Image
				src="/images/careergram/call-to-action.svg"
				alt="Survey inputs"
				width={1600}
				height={800}
			/>
			<ContentSection heading="Student Insights">
				<p>
					To communicate student insights, it was important that the information
					was presented in a clear and engaging format to make it easily
					understandable for both mentors and mentees. We also focused on the
					copywriting to incorporate a youthful and playful tone, catering to a
					young audience and increasing engagement for users as they read
					through their insights.
				</p>
			</ContentSection>
			<Image
				src="/images/careergram/insights.svg"
				alt="Survey inputs"
				width={1600}
				height={800}
			/>
			<ContentSection heading="Loading Indicators">
				<p>
					Because Careergram includes AI analysis to process data, it was
					important to communicate loading statuses and engage users during long
					loading periods. I created this loading animation using Figma and
					Lottie Files.
				</p>
			</ContentSection>
			<Image
				src="/images/careergram/loading.svg"
				alt="Survey inputs"
				width={1600}
				height={800}
			/>
			<ContentSection heading="Reflection and Future Steps">
				<p>
					During my time on this project, I learned the importance of
					communicating and consistently sharing what I'm working on. This
					helped iterate quickly and keep everyone on the same page.
					Additionally, I learned different ways of asking for feedback based on
					where I am in the design process such as through Slack messages,
					asynchronous Figma comments, or synchronous feedback on Zoom. Moving
					forward, I hope to use these skills in future projects!
				</p>
				<p>
					We are currently building these designs in development and I am
					helping contribute to the front end development of this app. In the
					future, we plan to use the fully built version for research purposes,
					but for now you can check it out{" "}
					<a
						href="https://careergram.edsight.io"
						target="_blank"
						className="underlineb"
					>
						here
					</a>
					!
				</p>
			</ContentSection>
		</main>
	);
}
