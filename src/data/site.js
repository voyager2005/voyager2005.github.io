export const profile = {
  name: 'Akshat G',
  location: 'Bengaluru, India',
  photo: './images/profile.jpeg',
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
  'I am a Computer Science Honours student at <a href="https://www.manipal.edu/mit-bengaluru/programs/program-list/b-tech/computer-science-and-engineering.html" target="_blank" rel="noopener noreferrer">Manipal Institute of Technology</a> specializing in AI with a Minor in AI for Healthcare, and an AI Research Intern at <a href="https://www.shell.in" target="_blank" rel="noopener noreferrer">Shell R&D</a>.',
  'My research interests focus on computer vision and data-efficient, data-centric machine learning—specifically representation pretraining (DDPMs) and structural constraints in hierarchical vision models (HiME).',
]

export const experience = [
  {
    role: 'Intern, Multiphysics AI and Product Innovation',
    org: 'Shell India Markets Private Limited',
    logo: './images/experience/shell.svg',
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
    logo: './images/experience/sensera.png',
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
    logo: './images/experience/ceam.jpeg',
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
    title: 'Sensera: A Privacy-First, Offline-First Personal Health Record Architecture',
    thumb: './images/publications/sensera_pub.svg',
    authors: 'G. Akshat, A. Sinha',
    venue: 'Zenodo, 2026',
    blurb: 'We present a production offline-first mobile health-records system using serverless machine learning (Surya, Qwen2.5-3B, BGE-M3) for document OCR, structured information extraction, and semantic search protected by consent-scoped Row-Level Security.',
    links: [
      { label: 'Zenodo', href: 'https://doi.org/10.5281/zenodo.22013979' }
    ],
  },
  {
    title: 'Unsupervised Anatomical Feature Learning via Denoising Diffusion Probabilistic Models',
    thumb: './images/publications/diffusion.svg',
    authors: 'G. Akshat, S. Bhatnagar, S. Ankalaki, T. K. Mishra',
    venue: 'Submitted to IEEE Access (Under peer review at IEEE Transactions on Medical Imaging), 2026',
    blurb: 'We propose using DDPM pretraining on unlabeled abdominal CT scans (BTCV dataset) to learn robust anatomical priors, showing that diffusion encoders retain over 80% of fully-supervised performance with only 10% of labels.',
    links: [],
  },
  {
    title: 'Quality-Controlled Synthetic Medical Data Generation',
    thumb: './images/publications/synthetic_gan.svg',
    authors: 'G. Akshat, R. R',
    venue: 'Honors Thesis, Submitted, 2026',
    blurb: 'We develop a Teacher-Student semi-supervised framework using conditional GANs to synthesize high-quality lumbar spine MRI slices while filtering out synthetic noise through a novel quality assessment metric.',
    links: [],
  },
  {
    title: 'Data-Centric Polyp Segmentation for Colorectal Cancer Detection',
    thumb: './images/publications/polyp_seg.svg',
    authors: 'G. Akshat, R. R',
    venue: 'Submitted, 2025',
    blurb: 'We engineer a data-centric preprocessing pipeline with enhanced ground-truth labels and a deep learning model for polyp segmentation, achieving a Dice score of 0.9525.',
    links: [],
  },
  {
    title: 'Nucleus Segmentation in H&E-Stained Histopathology Images',
    thumb: './images/publications/nucleus.svg',
    authors: 'G. Akshat, T. K. Mishra',
    venue: 'SAGE Digital Health, 2025 (Accepted, awaiting publication)',
    blurb: 'We present a comparative analysis of deep learning architectures on the MoNuSeg dataset, achieving competitive results for nuclear segmentation in clinical tissue samples.',
    links: [],
  },
  {
    title: 'Semi-Supervised Learning on Constrained Datasets',
    thumb: './images/publications/semi_supervised.svg',
    authors: 'G. Akshat, R. R, G. Surathkal',
    venue: 'Submitted, 2025',
    blurb: 'We design an adaptive confidence-thresholding strategy based on pixel-wise uncertainty to stabilize attention U-Net training under extreme label scarcity (50 labeled samples).',
    links: [],
  },
  {
    title: 'Segmenting Lung Regions for TB Detection',
    thumb: './images/publications/lung_seg.svg',
    authors: 'G. Akshat, R. R',
    venue: 'Presented at CVIP 2025; awaiting publication',
    blurb: 'We evaluate advanced U-Net variants for region-of-interest lung segmentation in chest X-rays, optimizing hyperparameters to achieve a Mean Dice score of 0.95.',
    links: [],
  },
  {
    title: 'Binary Classification of Galaxies Using Machine Learning and Deep Learning',
    thumb: './images/publications/galaxies.svg',
    authors: 'N. Mishra, G. Akshat, U. Moorthy, V. E. Sathishkumar',
    venue: 'Data Science and Exploration in Artificial Intelligence (CODE-AI 2025), Springer CCIS, 2026, pp. 88–98',
    blurb: 'We evaluate different machine learning and deep learning architectures to improve classification accuracy for galaxy morphology.',
    links: [
      { label: 'DOI', href: 'https://doi.org/10.1007/978-3-032-19318-6_9' }
    ],
  },
]

export const education = {
  school: 'Manipal Institute of Technology',
  logo: './images/education/mit_logo.jpg',
  location: 'Bengaluru, India',
  degree: 'B.Tech (Honours), Computer Science and Engineering',
  period: 'Jul 2023 – May 2027',
  details: ['Specialization: Artificial Intelligence', 'CGPA: 9.56 / 10'],
}

export const mentors = [
  {
    name: 'Vishal Ahuja',
    org: 'Shell Research',
    url: 'https://www.linkedin.com/in/vishal-ahuja-a7090556/',
    text: 'was my supervisor and project lead at Shell. He trusted me to complete the entire project, end to end, and that trust was what motivated me. I would not have been able to work and learn at Shell, nor design and propose the HiME architecture, if not for his leeway and trust in me to lead the research.',
  },
  {
    name: 'Dr. Rashmi R',
    org: 'Manipal Institute of Technology',
    url: 'https://www.manipal.edu/mu/campuses/mahe-bengaluru/academics/institution-list/mit-blr/department-faculty/faculty-list/dr--rashmi-r.html',
    text: 'for taking me in as an undergraduate research assistant, helping me publish my first paper, and guiding me as my B.Tech Project advisor and B.Tech Honors Thesis guide.',
  },
  {
    name: 'Dr. Tusar Kanti Mishra',
    org: 'Manipal Institute of Technology',
    url: 'https://www.manipal.edu/mu/campuses/mahe-bengaluru/academics/institution-list/mit-blr/department-faculty/faculty-list/dr--tusar--kanti--midhra.html',
    text: 'for helping me publish my first journal paper as my advisor, and learning how to approach research under his guidance.',
  },
]

export const writings = [
  {
    title: 'Deep Learning for CV (Beginner Series) - Article 1',
    description: 'An introductory guide covering the foundational math, matrix operations, and simple network layers for Computer Vision.',
    pdfUrl: 'https://github.com/voyager2005/deep-learning-for-cv-beginner-articles/blob/main/articles/Article%201.pdf',
  },
  {
    title: 'Deep Learning for CV (Beginner Series) - Article 2',
    description: 'An in-depth article exploring backpropagation, optimization techniques, and practical neural network training paradigms.',
    pdfUrl: 'https://github.com/voyager2005/deep-learning-for-cv-beginner-articles/blob/main/articles/Article%202.pdf',
  },
]

export const projects = [
  {
    title: 'cpp-neural-net',
    description: 'From-scratch C++ implementations of artificial neural network architectures, forward pass, and backpropagation optimization routines.',
    githubUrl: 'https://github.com/voyager2005/cpp-neural-net',
  },
  {
    title: 'an-atom',
    description: 'A modular, header-only C++ library containing from-scratch implementations of fundamental machine learning components and neural layers.',
    githubUrl: 'https://github.com/voyager2005/an-atom',
  },
]
