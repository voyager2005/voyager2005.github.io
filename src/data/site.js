export const profile = {
  name: 'Akshat G',
  location: 'Bengaluru, India',
  photo: './images/profile.svg',
  cv: './Akshat_G_CV.pdf',
}

// Icon links under the photo. Icons use Font Awesome 6 classes.
export const socialLinks = [
  { label: 'Email', href: 'mailto:akshat.gururaj@gmail.com', icon: 'fas fa-envelope' },
  {
    label: 'Scholar',
    href: 'https://scholar.google.com/',
    icon: 'fas fa-graduation-cap',
  },
  { label: 'CV (Detailed)', href: './Akshat_G_CV.pdf', icon: 'fas fa-file-lines' },
  { label: 'Resume (1-Page)', href: './Akshat_G_Resume.pdf', icon: 'fas fa-file-pdf' },
  { label: 'GitHub', href: 'https://github.com/voyager2005', icon: 'fab fa-github' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/akshat-gururaj/',
    icon: 'fab fa-linkedin',
  },
]

export const bio = [
  'I am a Computer Science student, AI engineer, and MedTech startup co-founder. I build production ML systems, scalable backend infrastructure, and mobile applications end to end.',
  'My work spans GPU-accelerated inference, computer vision, LLM deployment, and distributed AI pipelines — from research all the way to production. I enjoy leading technical teams and shipping software that real users depend on.',
  'I am currently pursuing a B.Tech (Honours) in Computer Science and Engineering with a specialization in Artificial Intelligence at the Manipal Institute of Technology, Bengaluru.',
]

export const experience = [
  {
    role: 'Intern, Multiphysics AI and Product Innovation',
    org: 'Shell India Markets Private Limited',
    location: 'Bengaluru, India',
    period: 'Jun 2026 – Present',
    points: [
      'Designed HiME, a hierarchical multilabel classifier for gear failure analysis, achieving 100% hierarchy consistency and 90% expert accuracy by enforcing hierarchical constraints during training rather than post-processing.',
      'Developed a modular inference framework that decoupled feature extraction from hierarchical classification, accelerating experimentation with multiple vision backbones.',
      'Deployed an automated gear failure assessment system that reduced manual report generation, letting domain experts focus on high-value human-in-the-loop annotation and validation.',
    ],
  },
  {
    role: 'Co-Founder & ML Engineer',
    org: 'Sensera',
    location: 'Bengaluru, India',
    period: 'Feb 2026 – Jun 2026',
    points: [
      'Co-founded an AI MedTech startup building intelligent Personal Health Records; shipped a full-stack platform supporting medication tracking, vitals, and document management for 50+ daily active users.',
      'Architected an asynchronous document-processing pipeline that decoupled OCR and NLP inference across 10 parallel GPU workers, reducing end-to-end latency to 3 s warm-start and 10 s cold-start.',
      'Implemented semantic search over medical records using pgvector and row-level security, enabling sub-second retrieval while isolating user data.',
      'Deployed a self-hosted LLM pipeline for summarization and structured information extraction, keeping sensitive patient data within self-hosted infrastructure.',
      'Core ML infrastructure and proprietary medical AI assets were acquired following product development.',
    ],
  },
  {
    role: 'Machine Learning Lead – Code',
    org: 'CEAM — Center of Excellence in Autonomous Mobility',
    location: 'Bengaluru, India',
    period: 'Aug 2025 – Aug 2026',
    points: [
      'Led a 16-member computer vision team developing Project MAVERIC, an autonomous perception stack for real-time robotic navigation.',
      'Engineered high-performance perception pipelines using optimized C++ (Eigen) and NumPy, delivering real-time semantic segmentation (56 Hz) and object detection (16 FPS).',
      'Developed a custom LiDAR-camera fusion pipeline enabling accurate 3D scene understanding and supporting real-time path planning.',
    ],
  },
]

export const skills = [
  { tag: 'programming', items: 'Python, TypeScript / JavaScript, Java, C, SQL, Bash' },
  {
    tag: 'ml frameworks',
    items:
      'PyTorch, TensorFlow, HuggingFace Transformers, Sentence-Transformers, TensorRT, ONNX Runtime, OpenCV, scikit-learn',
  },
  {
    tag: 'core expertise',
    items:
      'Machine Learning, Deep Learning, Computer Vision, Natural Language Processing, Generative AI',
  },
  {
    tag: 'ai/ml focus',
    items:
      'LLMs, Retrieval-Augmented Generation (RAG), Dense Retrieval, Semantic Search, Vector Embeddings, Transfer Learning, Fine-tuning',
  },
  {
    tag: 'systems & cloud',
    items:
      'Docker, Modal (Serverless GPU), Supabase, Google Cloud (OAuth, Drive API), AWS',
  },
  {
    tag: 'databases',
    items:
      'PostgreSQL (Schema Design, Row-Level Security, Migrations, Indexing), pgvector (HNSW ANN)',
  },
  { tag: 'frontend & backend', items: 'React Native (Expo SDK 54), React, FastAPI, Pydantic' },
]

export const publicationsConfig = {
  scholarUrl: 'https://scholar.google.com/',
}

export const publications = [
  {
    title: 'Binary Classification of Galaxies Using Machine Learning and Deep Learning',
    authors: 'N. Mishra, G. Akshat, U. Moorthy, V. E. Sathishkumar',
    venue: 'Data Science and Exploration in Artificial Intelligence (CODE-AI 2025), Springer CCIS, 2026, pp. 88–98',
    doi: 'https://doi.org/10.1007/978-3-032-19318-6_9',
  },
  {
    title: 'Nucleus Segmentation in H&E-Stained Histopathology Images',
    authors: 'G. Akshat, T. K. Misra',
    venue: 'SAGE Digital Health, 2025 (Accepted, awaiting publication)',
  },
  {
    title: 'Unsupervised Anatomical Feature Learning via Denoising Diffusion Probabilistic Models',
    authors: 'G. Akshat, S. Bhatnagar, S. Ankalaki, T. K. Misra',
    venue: 'Submitted to IEEE Access (Under peer review at IEEE Transactions on Medical Imaging)',
  },
  {
    title: 'Quality-Controlled Synthetic Medical Data Generation',
    authors: 'G. Akshat, R. R',
    venue: 'Honors Thesis, Submitted, 2026',
  },
  {
    title: 'Semi-Supervised Learning on Constrained Datasets',
    authors: 'G. Akshat, R. R, G. Surathkal',
    venue: 'Submitted, 2025',
  },
  {
    title: 'Data-Centric Polyp Segmentation for Colorectal Cancer Detection',
    authors: 'G. Akshat, R. R',
    venue: 'Submitted, 2025',
  },
  {
    title: 'Segmenting Lung Regions for TB Detection',
    authors: 'G. Akshat, R. R',
    venue: 'Presented at CVIP 2025; awaiting publication',
  },
]

export const education = {
  school: 'Manipal Institute of Technology',
  location: 'Bengaluru, India',
  degree: 'B.Tech (Honours), Computer Science and Engineering',
  period: 'Jul 2023 – May 2027',
  details: ['Specialization: Artificial Intelligence', 'CGPA: 9.56 / 10'],
}
