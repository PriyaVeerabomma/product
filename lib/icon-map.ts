// Map of skill names to their corresponding SVG icons
export const iconMap: Record<string, string> = {
  // ML/AI
  LangChain: "/icons/langgraph.svg",
  TensorFlow: "/icons/tensorflow.svg",
  OpenAI: "/icons/openai.svg",
  NLTK: "/icons/python.svg",
  ElasticSearch: "/icons/elasticsearch.svg",
  Pinecone: "/icons/pinecone.svg",

  // Data Engineering
  Python: "/icons/python.svg",
  "Apache Airflow": "/icons/airflow.svg",
  Snowflake: "/icons/snowflake.svg",
  DBT: "/icons/dbt.svg",
  PostgreSQL: "/icons/postgresql.svg",
  MongoDB: "/icons/mongodb.svg",
  MySQL: "/icons/mysql.svg",
  Redis: "/icons/redis.svg",
  "Vector Databases": "/icons/vectordatabase.svg",
  Pandas: "/icons/python.svg",
  NumPy: "/icons/python.svg",
  Matplotlib: "/icons/python.svg",
  Seaborn: "/icons/python.svg",
  "Advanced Excel": "/icons/excel.svg",

  // Backend
  FastAPI: "/icons/fastapi.svg",
  "Node.js": "/icons/nodejs.svg",
  "Express.js": "/icons/express.svg",
  "Spring Boot": "/icons/spring.svg",
  Hibernate: "/icons/hibernate.svg",

  // Frontend
  "React.js": "/icons/react.svg",
  TypeScript: "/icons/typescript.svg",
  JavaScript: "/icons/javascript.svg",
  HTML: "/icons/html.svg",
  CSS: "/icons/css.svg",

  // Cloud
  AWS: "/icons/aws.svg",
  Azure: "/icons/azure.svg",
  GCP: "/icons/gcp.svg",

  // DevOps
  Docker: "/icons/docker.svg",
  Kubernetes: "/icons/kubernetes.svg",
  Terraform: "/icons/terraformio.svg",
  "CI/CD": "/icons/git.svg",
  Git: "/icons/git.svg",

  // Database
  DynamoDB: "/icons/dynamodb.svg",
  Tableau: "/icons/tableau.svg",
}

// Default icon for skills without a specific icon
export const defaultIcon = "/placeholder.svg?height=24&width=24"

// Function to get the icon for a skill
export function getSkillIcon(skillName: string): string {
  return iconMap[skillName] || defaultIcon
}
