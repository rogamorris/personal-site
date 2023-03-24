import type { Metadata } from 'next';
import {
  GitHubIcon,
  LinkedinIcon,
  ArrowIcon,
  TwitterIcon,
} from 'components/icons';

export const metadata: Metadata = {
  title: 'About',
  description: 'About me (Roger Morris).',
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        Hey, I'm Roger.
      </p>
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <p>
          This is a <b>placeholder</b>
        </p>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend dolor vel justo varius, vel lobortis nulla molestie. Aenean at justo quis felis consequat luctus. Sed suscipit tortor risus, sit amet malesuada ipsum finibus id. Aliquam interdum erat vel risus tristique, id iaculis sapien efficitur. 
        </p>
        <p>
          Suspendisse potenti. Suspendisse molestie ullamcorper rutrum. Pellentesque eget semper nulla. Donec sodales ligula velit, nec malesuada nibh ornare in. Donec ac commodo mauris. Duis elementum purus libero, ac sollicitudin elit fermentum vel. Nullam nec dapibus eros, at faucibus velit.
        </p>
        <p className="mb-8">
          In sit amet magna sit amet ipsum tincidunt porttitor quis non quam. Donec rhoncus eleifend risus, at blandit lacus malesuada vel. In pharetra, neque nec pulvinar hendrerit, ipsum justo congue enim, sed euismod nisi velit vitae massa. Fusce vel tellus malesuada, hendrerit libero ut, accumsan nibh.
        </p>
        <div className="flex flex-col gap-2 md:flex-row md:gap-2">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/realrogermorris"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <TwitterIcon />
              <div className="ml-3">Twitter</div>
            </div>
            <ArrowIcon />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/rogamorris"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <GitHubIcon />
              <div className="ml-3">GitHub</div>
            </div>
            <ArrowIcon />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/rogeralanmorris/"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <LinkedinIcon />
              <div className="ml-3">Linkedin</div>
            </div>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
