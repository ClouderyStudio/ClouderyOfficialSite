"use client"
import { cn } from "@/lib/utils"
import { Card, CardTitle, CardContent } from "../ui/card"
import Image from "next/image"
import RepoItem from "../RepoItem"
import { AnyARecord } from "dns"

const importantProjects = [
  {
    cate: 'game',
    name: '云竹网路MC互通服',
    image: 'https://api.cloudery.cn/cdn-assets/cloudery/mcyz.jpeg',
    desc: ''
  },
  {
    cate: 'game',
    name: '云术生存战争服务器',
    image: 'https://api.cloudery.cn/cdn-assets/cloudery/sczz.jpg',
    desc: ''
  }
]

export const Projects = async () => {
  let delay = 0;
  const getDelay = () => (delay+=200);
  const Repos = await githubProjects();
  return(
    <section className="container grid items-center gap-5 pb-7 pt-4 md:py-10">
      <h1 className={cn("text-center text-3xl leading-tight tracking-widest subpixel-antialiased md:text-4xl","animate-fade-down animate-ease-in-out")} style={{ animationDelay: `${getDelay()}ms` }}>
          我们的项目
          <p className="text-lg text-muted-foreground">这是一些项目</p>
      </h1>
      <h2 className={cn("text-center text-2xl leading-tight tracking-widest subpixel-antialiased md:text-3xl","animate-fade-down animate-ease-in-out")} style={{ animationDelay: `${getDelay()}ms` }}>
          主要项目
      </h2>
    <div className="grid animate-fade-down grid-cols-4 gap-5 animate-ease-in-out" style={{ animationDelay: `${getDelay()}ms` }}>
            {
              importantProjects.map((project) => (
            <Card className="rounded-sm">
            <CardTitle className="text-center text-2xl">
              <br></br>
              <Image className="rounded-3xl px-5 blur-sm hover:blur-0" src={ `${project.image}` } alt="" height={ `280` } width={ `680` }></Image><br/>
              {project.name}</CardTitle>
              <br></br>
            <CardContent>{project.desc}</CardContent>
          </Card>
        ))}
    </div>
    <h2 className={cn("text-center text-2xl leading-tight tracking-widest subpixel-antialiased md:text-3xl","animate-fade-down animate-ease-in-out")} style={{ animationDelay: `${getDelay()}ms` }}>
          开源项目
      </h2>
    <div className="mb-12 grid w-full animate-fade-down grid-cols-1 grid-rows-2 gap-2 animate-ease-in-out md:grid-cols-2 md:grid-rows-1" style={{ animationDelay: `${getDelay()}ms` }}>
                {Repos.map((repo: Record<string, any>) => {
                    return (
                        <RepoItem
                            key={repo.name}
                            name={repo.name}
                            description={repo.description}
                            stars={repo.stargazers_count}
                            forks={repo.forks_count}
                            language={repo.language}
                        />
                    );
                })}
            </div>

    </section>
  )
}

export async function githubProjects() {
  const repos = await fetch(`https://api.kkgithub.com/orgs/ClouderyStudio/repos?type=owner&per_page=100`).then(res =>
    res.json()
  );

  const topRepos = repos
      .sort((a: Record<string, any>, b: Record<string, any>) => b.stargazers_count - a.stargazers_count)
      .slice(0, 4);

  return topRepos;
}

