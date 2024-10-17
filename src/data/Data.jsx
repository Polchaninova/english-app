import introduceImg from "../assets/list/introduce.png";
import interviewsImg from "../assets/list/interviews.png";
import financialImg from "../assets/list/financial.png";
import airoportImg from "../assets/list/airoport.png";
import analysisPresentationImg from "../assets/list/analysis-presentation.png";

import meetingsImg from "../assets/list/meetings.png";
import communicationImg from "../assets/list/communication.png";
import conflictResolutionImg from "../assets/list/conflict-resolution.png";
import crossCulturalImg from "../assets/list/cross-cultural.png";
import etiguetteImg from "../assets/list/etiguette.png";

import negotiationSkilsImg from "../assets/list/negotiation-skils.png";
import networkingEventsImg from "../assets/list/networking-events.png";
import projectManagmentImg from "../assets/list/project-managment.png";
import smallTalkImg from "../assets/list/small-talk.png";
import travelImg from "../assets/list/travel.png";

import writingReportImg from "../assets/list/writing-report.png";


const data = [
  {
    id: "jobSearching",
    title: "Job Searching",
    lessons: [
      {
        img: introduceImg,
        id: 1,
        title: "How to Search for a Job",
        content:
          "Learn vocabulary and phrases for job searching, creating resumes, and filling out job applications.",
        examples: [
          "I'm looking for a position in software development.",
          "My resume highlights my skills in project management.",
        ],
      },
      {
        img: interviewsImg,
        id: 2,
        title: "Interviews and Networking",
        content:
          "Prepare for job interviews, typical questions and answers, talking about your skills and experience.",
        examples: [
          "Tell me about a time when you solved a problem at work.",
          "What are your strengths and weaknesses?",
        ],
      },
    ],
  },
  {
    id: "workplaceCommunication",
    title: "Communication",
    lessons: [
      {
        img: communicationImg,
        id: 1,
        title: "Office Communication",
        content:
          "Phrases for communicating with colleagues and management, writing emails and business correspondence.",
        examples: [
          "Could you please forward me the report?",
          "I’d like to discuss this in our next meeting.",
        ],
      },
      {
        img: meetingsImg,
        id: 2,
        title: "Meetings and Presentations",
        content:
          "How to behave during meetings, structure your speech, and present arguments effectively.",
        examples: [
          "Let's start with a quick overview of our agenda.",
          "I'd like to highlight three key points in this presentation.",
        ],
      },
    ],
  },
  {
    id: "businessEtiquette",
    title: "Business",
    lessons: [
      {
        img: etiguetteImg,
        id: 1,
        title: "Business Etiquette",
        content:
          "Understand cultural differences and behavior rules in various countries.",
        examples: [
          "In Japan, it's polite to bow when greeting someone.",
          "Always make eye contact during a handshake in the US.",
        ],
      },
      {
        img: crossCulturalImg,
        id: 2,
        title: "Cross-Cultural Communication",
        content:
          "Communicate with international partners, understand business practices in other countries.",
        examples: [
          "In some cultures, silence can be a form of communication.",
          "Direct communication is highly valued in Western countries.",
        ],
      },
    ],
  },
  {
    id: "financeAndProjectManagement",
    title: "Financial",
    lessons: [
      {
        img: financialImg,
        id: 1,
        title: "Financial Vocabulary",
        content:
          "Basic terms related to finance, budgeting, and discussing financial reports.",
        examples: [
          "Our revenue has increased by 20% this quarter.",
          "The budget for this project needs to be reviewed.",
        ],
      },
      {
        img: projectManagmentImg,
        id: 2,
        title: "Project Management",
        content:
          "Terminology used for project planning, execution, and result evaluation.",
        examples: [
          "We need to define the project scope and deliverables.",
          "Risk assessment is a crucial part of project planning.",
        ],
      },
    ],
  },
  {
    id: "travelAndBusinessTrips",
    title: "Travel",
    lessons: [
      {
        img: travelImg,
        id: 1,
        title: "Travel Arrangements",
        content:
          "How to book tickets, hotels, and understand travel itineraries.",
        examples: [
          "I'd like to book a flight to New York, please.",
          "Do you have any hotel recommendations near the conference venue?",
        ],
      },
      {
        img: airoportImg,
        id: 2,
        title: "At the Airport and Hotel",
        content:
          "Vocabulary related to airports, hotels, and customs procedures.",
        examples: [
          "Where is the check-in counter for my flight?",
          "I'd like to request a late check-out, please.",
        ],
      },
    ],
  },
  {
    id: "negotiationSkills",
    title: "Travel",
    lessons: [
      {
        img: negotiationSkilsImg,
        id: 1,
        title: "Negotiation Skills",
        content:
          "Expressions and techniques used during negotiations, how to make offers and reach agreements.",
        examples: [
          "We are open to negotiating the price based on volume.",
          "Let’s find a win-win solution for both parties.",
        ],
      },
      {
        img: conflictResolutionImg,
        id: 2,
        title: "Conflict Resolution",
        content:
          "How to resolve conflicts, manage emotions, and avoid misunderstandings in business.",
        examples: [
          "It's important to stay calm and listen to all parties involved.",
          "Let’s focus on finding a mutually agreeable solution.",
        ],
      },
    ],
  },
  {
    id: "reportingAndAnalysis",
    title: "Resolution",
    lessons: [
      {
        img: writingReportImg,
        id: 1,
        title: "Report Writing",
        content:
          "How to write and structure reports using appropriate terminology.",
        examples: [
          "This report outlines the key performance indicators for Q1.",
          "Our findings are based on the data collected from various sources.",
        ],
      },
      {
        img: analysisPresentationImg,
        id: 2,
        title: "Data Analysis and Presentation",
        content:
          "How to describe and present data, create charts, and diagrams.",
        examples: [
          "The bar chart represents our monthly sales growth.",
          "This pie chart shows the market share of each competitor.",
        ],
      },
    ],
  },
  {
    id: "socialSkillsAndNetworking",
    title: "Networking",
    lessons: [
      {
        img: smallTalkImg,
        id: 1,
        title: "Small Talk in Business",
        content: "How to engage in casual conversations in a business context.",

        examples: [
          "How was your weekend?",
          "I heard you're working on a new project; tell me more about it.",
        ],
      },
      {
        img: networkingEventsImg,
        id: 2,
        title: "Networking Events",
        content:
          "Vocabulary for participating in conferences, exhibitions, and business events.",
        examples: [
          "It's great to finally meet you in person!",
          "Are you attending any other sessions at this conference?",
        ],
      },
    ],
  },
];

export default data;
