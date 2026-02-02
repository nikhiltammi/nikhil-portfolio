const navLinks = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

const words = [
  { text: "AI Platforms", imgPath: "/images/ideas.svg" },
  { text: "Cloud Architecture", imgPath: "/images/concepts.svg" },
  { text: "GenAI Systems", imgPath: "/images/designs.svg" },
  { text: "Multi-Agent Workflows", imgPath: "/images/code.svg" },
  { text: "AI Platforms", imgPath: "/images/ideas.svg" },
  { text: "Cloud Architecture", imgPath: "/images/concepts.svg" },
  { text: "GenAI Systems", imgPath: "/images/designs.svg" },
  { text: "Multi-Agent Workflows", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 5, suffix: "+", label: "Years of Experience", icon: "code" },
  { value: 7, suffix: "M+", label: "Files Migrated to Cloud", icon: "laptop" },
  { value: 5, suffix: "", label: "Cloud Certifications", icon: "layers" },
  { value: 4, suffix: "", label: "Enterprise Clients", icon: "users" },
];

const logoIconsList = [
  { imgPath: "/images/logos/aws.svg" },
  { imgPath: "/images/logos/gcp.svg" },
  { imgPath: "/images/logos/azure.svg" },
  { imgPath: "/images/logos/bedrock.svg" },
  { imgPath: "/images/logos/kubernetes.svg" },
  { imgPath: "/images/logos/docker.svg" },
  { imgPath: "/images/logos/terraform.svg" },
  { imgPath: "/images/logos/python.svg" },
  { imgPath: "/images/logos/snowflake.svg" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Generative AI & Multi-Agent Systems",
    desc: "Building production-grade GenAI platforms using AWS Bedrock, AgentCore, MCP, RAG, and LangChain for enterprise automation.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Cloud Architecture & DevOps",
    desc: "Designing scalable infrastructure across AWS, Azure, and GCP with CI/CD pipelines, Kubernetes, and Infrastructure as Code.",
  },
  {
    imgPath: "/images/time.png",
    title: "Data Engineering & ML Platforms",
    desc: "Architecting data pipelines with Kafka, Spark, Snowflake, and deploying ML models using SageMaker and MLflow.",
  },
];

const techStackImgs = [
  { name: "AWS Bedrock", imgPath: "/images/logos/bedrock.svg" },
  { name: "Python", imgPath: "/images/logos/python.svg" },
  { name: "Kubernetes", imgPath: "/images/logos/kubernetes.svg" },
  { name: "Terraform", imgPath: "/images/logos/terraform.svg" },
  { name: "Snowflake", imgPath: "/images/logos/snowflake.svg" },
];

const techStackIcons = [
  {
    name: "GenAI Engineer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Cloud Architect",
    imgPath: "/images/logos/cloud-architect-icon.svg",
  },
  {
    name: "Software Engineer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Full-Stack Developer",
    imgPath: "/images/logos/fullstack-icon.svg",
  },
  {
    name: "DevOps Engineer",
    modelPath: "/models/docker.glb",
    scale: 1,
    rotation: [0, Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "At Boeing, I'm architecting AI-powered platforms for export compliance, migrating millions of files to AWS while ensuring 100% ACL fidelity and regulatory compliance.",
    imgPath: "/images/logos/boeing.png",
    logoPath: "/images/logos/boeing.png",
    title: "Sr AI Software Engineer - Boeing",
    date: "Sep 2025 - Present",
    responsibilities: [
      "Designed and implemented an AI-powered export document delivery platform, migrating 150+ file formats to AWS while improving regulatory compliance efficiency by 30%.",
      "Led the large-scale migration of 7+ million files from on-prem systems to Amazon S3, preserving 100% ACL fidelity through precise permission and entitlement mapping.",
      "Implemented secure Smart Search using Amazon Kendra integrated with Amazon Bedrock, enabling authorized users to retrieve summaries and insights from large documents.",
      "Implemented end-to-end audit logging and traceability for file access and compliance actions, enabling faster investigations and improved regulatory reporting readiness.",
    ],
  },
  {
    review:
      "At QuinStreet, I built production-grade GenAI automation systems using multi-agent orchestration, delivering a non-hallucinating conversational engine with sub-15s latency.",
    imgPath: "/images/logos/quinstreet.png",
    logoPath: "/images/logos/quinstreet.png",
    title: "Sr AI Software Engineer - QuinStreet",
    date: "Jan 2025 - Sep 2025",
    responsibilities: [
      "Architected a production-grade GenAI automation system using Strands Agents SDK with multi-agent orchestration (GitHub, Transformation, Execution Agents) for Snowflake view generation.",
      "Developed an enterprise GenAI financial chatbot generating optimized SQL scripts for natural-language prompts, enhancing data retrieval by 30% and supporting 10+ visualization formats.",
      "Migrated MVP to scalable multi-agent architecture using Bedrock AgentCore, improving system scalability by 50% and ensuring reliable performance under high query volumes.",
      "Delivered a non-hallucinating, guardrail-enforced conversational engine with streaming responses and <15s average latency for complex analytical SQL queries.",
    ],
  },
  {
    review:
      "At SEIU 775 Benefits Group, I led multiple enterprise cloud and GenAI initiatives, reducing deployment times by 50% and automating complex data transformation workflows.",
    imgPath: "/images/logos/seiu.png",
    logoPath: "/images/logos/seiu.png",
    title: "Sr Cloud Consultant - SEIU 775",
    date: "Nov 2023 - Jan 2025",
    responsibilities: [
      "Optimized large-scale CI/CD pipelines by refactoring 36 CloudFormation stacks into nested stacks, reducing template size from ~950 KB to ~300 KB and cutting deployment time from ~3 hours to ~1.5 hours.",
      "Implemented database CI/CD automation using Bytebase, reducing production schema deployment time from 3-4 hours to under 1 minute.",
      "Built a GenAI-driven Snowflake automation pipeline that converts stored procedures into denormalized analytical views using GitHub MCP and Snowflake MCP.",
      "Designed an agent-orchestrated modernization platform to convert Oracle PL/SQL into AWS Glue Java jobs with automated extraction, conversion, validation, and deployment.",
    ],
  },
  {
    review:
      "At SS&C Technologies, I modernized enterprise CI/CD infrastructure, reducing compute costs by 60% through dynamic scaling and implementing drift detection for deployment reliability.",
    imgPath: "/images/logos/ssc.png",
    logoPath: "/images/logos/ssc.png",
    title: "Software Engineer - SS&C Technologies",
    date: "Jul 2021 - Jul 2022",
    responsibilities: [
      "Led migration of enterprise GitLab CI/CD infrastructure from OCI OKE to AWS EKS, modernizing pipelines supporting 300+ servers across four environments.",
      "Reduced CI/CD compute costs by ~60% through dynamic, on-demand scaling using Karpenter, Fargate, and Graviton EC2 instances.",
      "Implemented drift detection using CDK plan/state validation, preventing configuration mismatches across environments and improving deployment reliability.",
      "Embedded GDPR and NIST compliance checks into CI/CD pipelines using AWS Conformance Packs, cfn-nag, and checkov.",
    ],
  },
  {
    review:
      "At M-Digital Tech, I designed cloud-native ML pipelines and built scalable infrastructure using Terraform and Kubernetes, ensuring zero-downtime releases across 10+ microservices.",
    imgPath: "/images/logos/mdigital.png",
    logoPath: "/images/logos/mdigital.png",
    title: "Software Engineer - M-Digital Tech",
    date: "Dec 2019 - May 2021",
    responsibilities: [
      "Designed and deployed modular AWS infrastructure using Terraform and Ansible, provisioning 10+ VPC components to support scalable ML environments.",
      "Architected cloud-native ML pipelines using AWS ECS, Lambda, and S3, enabling scalable training and inference workflows with containerized Python models.",
      "Built a real-time data ingestion framework using Amazon Kinesis, S3, and Redshift, supporting high-throughput log processing and downstream analytics.",
      "Managed microservices deployments using Kubernetes Helm charts, enabling zero-downtime releases and versioned rollbacks across 10+ services.",
    ],
  },
];

const expLogos = [
  { name: "boeing", imgPath: "/images/logos/boeing.png" },
  { name: "quinstreet", imgPath: "/images/logos/quinstreet.png" },
  { name: "seiu", imgPath: "/images/logos/seiu.png" },
  { name: "ssc", imgPath: "/images/logos/ssc.png" },
];

const projects = [
  {
    name: "Strands GenAI Automation for Snowflake",
    description:
      "Architected a GenAI-driven automation system using Strands Agents SDK for Snowflake denormalized view generation with multi-agent orchestration including GitHub, Transformation, Execution, and Snowflake Agents.",
    tags: [
      { name: "AWS Bedrock", color: "blue-text-gradient" },
      { name: "Strands SDK", color: "green-text-gradient" },
      { name: "Snowflake", color: "pink-text-gradient" },
    ],
    image: "/images/projects/strands-genai.png",
    source_code_link: "https://github.com/nikhiltammi/",
  },
  {
    name: "Test Case Automation using AWS Bedrock",
    description:
      "Designed a GenAI-driven automation framework leveraging AWS Bedrock and multi-agent collaboration to generate and execute test cases, enhancing testing efficiency and reducing manual effort.",
    tags: [
      { name: "AWS Bedrock", color: "blue-text-gradient" },
      { name: "Multi-Agent", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
    ],
    image: "/images/projects/test-automation.png",
    source_code_link: "https://github.com/nikhiltammi/",
  },
  {
    name: "Chat with CI/CD Pipelines",
    description:
      "Developed an AWS Bedrock and GenAI-enhanced chat system to streamline CI/CD processes, providing dynamic insights and tailored recommendations for pipeline management.",
    tags: [
      { name: "GenAI", color: "blue-text-gradient" },
      { name: "CI/CD", color: "green-text-gradient" },
      { name: "AWS", color: "pink-text-gradient" },
    ],
    image: "/images/projects/cicd-chat.png",
    source_code_link: "https://github.com/nikhiltammi/",
  },
  {
    name: "GenAI Model and RAG Evaluator",
    description:
      "Implemented a GenAI-powered system on AWS Bedrock to evaluate RAG models, enhancing model selection and system scalability through automated performance analysis.",
    tags: [
      { name: "RAG", color: "blue-text-gradient" },
      { name: "AWS Bedrock", color: "green-text-gradient" },
      { name: "Evaluation", color: "pink-text-gradient" },
    ],
    image: "/images/projects/rag-evaluator.png",
    source_code_link: "https://github.com/nikhiltammi/",
  },
];

const testimonials = [
  {
    name: "Boeing Team Lead",
    mentions: "Export Compliance Platform",
    review:
      "Nikhil's expertise in AI and cloud architecture was instrumental in our export compliance modernization. His ability to migrate millions of files while maintaining regulatory compliance was exceptional.",
    imgPath: "/images/client1.png",
  },
  {
    name: "QuinStreet Engineering Manager",
    mentions: "GenAI Financial Chatbot",
    review:
      "The multi-agent GenAI system Nikhil built transformed our data analytics capabilities. The sub-15 second latency for complex SQL queries exceeded all our expectations.",
    imgPath: "/images/client2.png",
  },
  {
    name: "SEIU Technical Director",
    mentions: "Cloud Infrastructure",
    review:
      "Nikhil's optimization of our CI/CD pipelines cut deployment times in half. His GenAI-driven automation solutions have fundamentally improved our operational efficiency.",
    imgPath: "/images/client3.png",
  },
];

const socialImgs = [
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://linkedin.com/in/nikhiltammi/",
  },
  {
    name: "github",
    imgPath: "/images/github-icon.svg",
    url: "https://github.com/nikhiltammi/",
  },
  {
    name: "email",
    imgPath: "/images/email.svg",
    url: "mailto:nikhiltammi.tech@gmail.com",
  },
];

const skills = {
  programmingScripting: ["Python", "Java", "SQL", "Bash"],
  generativeAI: [
    "AWS Bedrock",
    "AgentCore",
    "MCP",
    "RAG",
    "GPT",
    "BERT",
    "Hugging Face",
    "LangChain",
    "CrewAI",
    "Strands",
    "Multi-Agent Systems",
  ],
  devOps: [
    "AWS CDK",
    "Terraform",
    "Kubernetes",
    "Docker",
    "Karpenter",
    "Fargate",
    "Jenkins",
    "GitHub Actions",
    "CodePipeline",
  ],
  cloud: [
    "AWS (EC2, EKS, ELB, RDS, S3, Lambda, SageMaker, CloudFormation)",
    "GCP",
    "Azure",
  ],
  monitoring: [
    "AppDynamics",
    "CloudWatch",
    "Datadog",
    "Prometheus",
    "Grafana",
  ],
  data: [
    "Kafka",
    "Apache Flink",
    "Spark",
    "Snowflake",
    "Data Lake Formation",
    "SQL Server",
    "Oracle DB",
    "DynamoDB",
  ],
  mlPlatforms: [
    "PyTorch",
    "TensorFlow",
    "Keras",
    "AWS Textract",
    "MLflow",
    "FastAPI",
    "REST API",
  ],
};

const education = [
  {
    degree: "Master of Engineering in Artificial Intelligence",
    school: "University of Cincinnati",
    location: "Cincinnati, OH",
    date: "Apr 2024",
  },
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    school: "Malla Reddy Engineering College",
    location: "Hyderabad, Telangana",
    date: "Jul 2021",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  projects,
  skills,
  education,
};
