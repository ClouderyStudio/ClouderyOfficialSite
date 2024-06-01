"use client"
import { cn } from "@/lib/utils";
import { BusIcon } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

export const Index = async () => {
  let delay = 0;
  const getDelay = () => (delay+=200);
  return (

<section className="container grid items-center gap-5 pb-7 pt-4 md:py-10">
<div className="items-end gap-5">
  <h1 className={cn("text-center text-3xl leading-tight tracking-widest subpixel-antialiased md:text-4xl","animate-fade-down animate-ease-in-out")} style={{ animationDelay: `${getDelay()}ms` }}>
    一艘穿梭在茫茫互联网之海中的小船<br></br>
    <TypeAnimation
    className={cn('bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-5xl font-black tracking-widest subpixel-antialiased md:text-8xl ', 'animate-fade-down animate-ease-in-out')} style={{
      WebkitTextFillColor: 'transparent',
      animationDelay: `${getDelay()}ms`
    }}
    sequence={[
      500,
      '云术工作室',
      1200,
      '<Cloudery />',
      1000,
    ]}
    cursor={true}
    speed={8}
    repeat={Infinity}
  />
  </h1>
  <p className="animate-fade-down text-center text-lg text-muted-foreground animate-ease-in-out" style={{ animationDelay: `${getDelay()}ms` }}>
    此网站基于 <strong>Next.js + React + Tailwind CSS + TypeScript + Shadcn/ui</strong> 开发
  </p>
</div>
<div className="flex animate-fade-down flex-col items-start gap-4 animate-ease-in-out" style={{ animationDelay: `${getDelay()}ms` }}>

  <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
    介绍
  </h1>
  <p className="max-w-[500px] text-lg text-muted-foreground">
  云术工作室，由云竹与MagicQiyi联手创立，专注于前后端开发以及游戏服务。作为一个多元化的团队，我们旗下产品广泛涉猎多个领域，致力于为客户提供卓越的技术支持与创新的解决方案。通过我们的专业能力和丰富经验，云术工作室正努力成为行业内的佼佼者。
  </p>
</div>
<div className="flex animate-fade-down flex-col items-end gap-4 text-right animate-ease-in-out" style={{ animationDelay: `${getDelay()}ms` }}>
  <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
    关于这里
  </h1>
  <p className="max-w-[500px] text-lg text-muted-foreground">
  这是我们的官方网站。您可能不知道，之前这个网站是采用PHP模板搭建的，然而，由于性能和兼容性问题，我们决定不再使用它。为了提升用户体验和网站的流畅性，我们现在采用了高效的Node.js技术进行了全新重构。这次的优化和调整将为用户带来更加稳定、快速且兼容性更好的访问体验。
  </p>
</div>
<Alert className="animate-fade-down animate-ease-in-out" style={{ animationDelay: `${getDelay()}ms` }}><BusIcon></BusIcon>
  <AlertTitle>你好</AlertTitle>
  <AlertDescription>
    此网站还在持续优化中，出现bug请前往Github反馈!
  </AlertDescription>
</Alert>
</section>
  )
}
