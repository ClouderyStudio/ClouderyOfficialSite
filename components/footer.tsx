"use client"
import React from 'react';

import Link from 'next/link';

import { cn } from '@/lib/utils';
import { TypeAnimation } from 'react-type-animation';
import { siteConfig } from '@/config/site';
import { Icons } from './icons';
import { buttonVariants } from './ui/button';

export const Footer = async () => {
  return (
    <footer className="container grid items-center gap-5 pb-7 pt-4 md:py-10">
      <hr></hr>
      <div>
              <strong><TypeAnimation
          className={cn('bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-4xl font-black tracking-widest subpixel-antialiased md:text-4xl ')} style={{
            WebkitTextFillColor: 'transparent',
          }}
          sequence={[
            500,
            '云术工作室',
            1200,
            '<Cloudery />',
            1000,
          ]}
          cursor={true}
          speed={10}
          repeat={Infinity}
        /></strong>
      <p className='text-sm'>&copy; Cloudery Studio 2022-2024 All rights reserved.<br></br>
      网站基于 Next.js · 我们❤开源
      </p><br/>
      <p className='max-w-[450px] text-sm text-muted-foreground'>注：如无特殊说明，所有文字的著作权和游戏摄影作品使用权归 Cloudery 所有。部分图片来自于公有领域。</p>
      </div>
      <div className='items-end'>
      <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="size-5" />
                <span className="sr-only">GitHub</span>
              </div>
        </Link>
      </div>
    </footer>
  );
};
