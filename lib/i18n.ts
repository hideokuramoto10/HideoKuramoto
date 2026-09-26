import { useReactiveVar } from "../hooks/useReactiveVar"
import { languageVar } from "../store"
import { getJapaneseContent } from "./japaneseContent"

const japanese: Record<string, string> = {
  about: "概要",
  resume: "履歴書",
  works: "制作実績",
  blog: "ブログ",
  stats: "統計",
  "about me": "自己紹介",
  Experience: "職務経歴",
  Education: "学歴",
  skill: "スキル",
  skills: "スキル一覧",
  quote: "メッセージ",
  achievements: "実績",
  "github activity": "GitHubの活動",
  "my services": "サービス",
  testimonials: "お客様の声",
  "fun facts": "実績",
  "All": "すべて",
  "All Projects": "すべてのプロジェクト",
  "Web Design": "ウェブデザイン",
  "AI": "AI",
  "Full-Stack": "フルスタック",
  residence: "居住地",
  address: "住所",
  email: "メール",
  freelance: "フリーランス",
  Japan: "日本",
  "Osaka, Japan": "大阪、日本",
  Available: "対応可能",
  Development: "開発",
  Language: "語学",
  Backend: "バックエンド",
  Frontend: "フロントエンド",
  DevOps: "DevOps",
  "AI & LLM Development": "AI・LLM開発",
  "Full-Stack Engineering": "フルスタック開発",
  "Cloud & DevOps": "クラウド・DevOps",
  "Backend & API Design": "バックエンド・API設計",
  "100,000+ Lines Written": "10万行以上のコードを執筆",
  "8+ Years Experience": "8年以上の経験",
  "5+ Countries Worked": "5か国以上での実績",
  "40+ Projects Shipped": "40件以上のプロジェクトを公開",
  "download cv": "履歴書をダウンロード",
  "Senior AI Engineer": "シニアAIエンジニア",
  "Hideo Kuramoto": "倉本秀夫",
  "Senior AI & Full Stack Engineer": "シニアAI・フルスタックエンジニア",
  "Full Stack Developer": "フルスタック開発者",
  "LLM & RAG Specialist": "LLM・RAGスペシャリスト",
  English: "英語",
  Japanese: "日本語",
  Knowledge: "知識",
  "Public Repos": "公開リポジトリ",
  "Total Commits": "総コミット数",
  "Pull Requests": "プルリクエスト",
  Contributions: "コントリビューション",
  "LangChain & LangGraph": "LangChain・LangGraph",
  "RAG Pipelines": "RAGパイプライン",
  "AI Agents": "AIエージェント",
  "OpenAI / GPT-5.6 APIs": "OpenAI / GPT-5.6 API",
  "Vector Databases (Pinecone, Weaviate)": "ベクトルデータベース（Pinecone、Weaviate）",
  "Prompt Engineering & Fine-tuning (LoRA, PEFT)": "プロンプト設計・ファインチューニング（LoRA、PEFT）",
  "Docker & Kubernetes": "Docker・Kubernetes",
  "AWS & Terraform": "AWS・Terraform",
  "PostgreSQL / MongoDB / Redis / Elasticsearch": "PostgreSQL / MongoDB / Redis / Elasticsearch",
  "GraphQL & REST APIs": "GraphQL・REST API",
  "Microservices Architecture": "マイクロサービスアーキテクチャ",
  Freelancer: "フリーランス",
  "Read More": "続きを読む",
  "Live Project": "公開中のプロジェクト",
  "Tech Stack": "使用技術",
  "View Live Demo": "デモを見る",
  "View on GitHub": "GitHubで見る",
  "View Project": "プロジェクトを見る",
  Tags: "タグ：",
  "Recent Projects": "最近のプロジェクト",
  "Free Consultation": "無料相談",
  "Video or Phone Call": "ビデオまたは電話での相談",
  "No Commitment": "契約不要",
  "Get in Touch": "お問い合わせ",
  "Contact Form": "お問い合わせフォーム",
  "Book a Meeting": "ミーティングを予約",
  "Download CV": "履歴書をダウンロード",
  "Senior AI & Full Stack Engineer with 8+ years of experience building scalable SaaS platforms, AI applications, and cloud-based systems.": "スケーラブルなSaaS、AIアプリケーション、クラウドシステムの開発に8年以上携わるシニアAI・フルスタックエンジニアです。",
  "Strong experience with LLMs, RAG, AI agents, LangChain, OpenAI APIs, FastAPI, React, Kubernetes, and AWS. I focus on writing clean, reliable, and easy-to-maintain code — handling the full development process from system design and backend development to AI integration, frontend, deployment, and performance improvements.": "LLM、RAG、AIエージェント、LangChain、OpenAI API、FastAPI、React、Kubernetes、AWSに精通しています。システム設計からバックエンド開発、AI連携、フロントエンド、デプロイ、性能改善まで一貫して担当し、読みやすく信頼性の高い保守しやすいコードを大切にしています。",
  "Build intelligent applications powered by AI. From chatbots and content generation to document analysis and automated workflows, I create AI solutions that solve real business problems.": "チャットボットやコンテンツ生成、文書分析、自動化ワークフローなど、実際のビジネス課題を解決するAIアプリケーションを開発します。",
  "Complete web applications from front to back. Modern, responsive interfaces paired with robust server-side logic, databases, and APIs. Scalable solutions that grow with your business.": "モダンで使いやすい画面と堅牢なサーバー処理、データベース、APIを備えたWebアプリケーションを一貫して開発します。事業の成長に合わせて拡張できる設計を提供します。",
  "Streamlined deployment pipelines with Docker and AWS. Automated testing, continuous integration, and reliable deployments across development, staging, and production environments.": "DockerとAWSを活用してデプロイを効率化します。自動テストと継続的インテグレーションにより、開発・検証・本番環境への安定したリリースを実現します。",
  "Fast, secure REST and GraphQL APIs that connect your applications. Clean architecture, efficient database design, and comprehensive documentation for seamless integration.": "アプリケーションをつなぐ高速で安全なREST・GraphQL APIを設計します。明快なアーキテクチャ、効率的なデータベース設計、充実したドキュメントで円滑な連携を支援します。",
}

export function useTranslate() {
  const language = useReactiveVar(languageVar)
  return (text: string) => (language === "ja" ? japanese[text] ?? text : text)
}

export function useTranslateContent() {
  const language = useReactiveVar(languageVar)
  return (section: string, id: string, field: string, text: string) =>
    language === "ja" ? getJapaneseContent(section, id, field, text) : text
}

export function useTranslateDate() {
  const language = useReactiveVar(languageVar)
  const months: Record<string, string> = {
    Jan: "1月", Feb: "2月", Mar: "3月", Apr: "4月", May: "5月", Jun: "6月",
    Jul: "7月", Aug: "8月", Sep: "9月", Oct: "10月", Nov: "11月", Dec: "12月",
  }

  return (date: string) => {
    if (language !== "ja") return date
    const match = date.match(/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4})$/)
    return match ? `${match[2]}年${months[match[1]]}` : date
  }
}