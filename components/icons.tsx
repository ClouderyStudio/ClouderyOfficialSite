import {
  LucideProps,
  Moon,
  SunMedium,
  Twitter,
  type Icon as LucideIcon,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  twitter: Twitter,
  logo: (props: LucideProps) => (
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64">  <image id="image0" width="64" height="64" x="0" y="0"
    href="data:image/png;base64,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
TkSuQmCC" />
</svg>
  ),
  gitHub: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
}
