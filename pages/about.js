import React from "react";
import { BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";
import Image from "next/image";


const about = () => {
  return (
    <div className="p-4 mt-20 bg-white border md:flex lg:prose-xl drop-shadow-sm">
      <figure className="max-w-screen-xl p-5 mx-auto prose sm:p-10 md:p-16 ">
        <div className="flex-row">
          <Image
            className="object-cover h-10 mx-auto w-30 md:w-48 md:h-auto md:rounded-md"
            src="/aditya.jpg"
            width="1000"
            height="1200"
            alt="Aditya Rawas"
          />
  
          <div className="flex justify-around my-4 md:justify-around">
            <span className="mx-4 cursor-pointer md:mr-4">
              <a
                className="hover:text-sky-400"
                href="https://www.linkedin.com/in/aditya-rawas-626578149/"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin />
              </a>{" "}
            </span>

            <span className="mx-4 cursor-pointer md:mr-4 hover:text-sky-400">
              <a
                className="hover:text-sky-400"
                href="https://twitter.com/rawas_aditya"
                target="_blank"
                rel="noreferrer"
              >
                <BsTwitter />
              </a>
            </span>
            <span className="mx-4 cursor-pointer md:mr-4 hover:text-sky-400">
              <a
                className="hover:text-sky-400"
                href="https://www.instagram.com/aditya.posts/"
                target="_blank"
                rel="noreferrer"
              >
                <BsInstagram />
              </a>
            </span>
          </div>
        </div>
      </figure>
      <div className="flex flex-col justify-center md:pr-2">
        <p className="justify-center text-xl font-medium md:flex md:justify-start ">
          I&apos;m Aditya Rawas and I&apos;m
          <span className="mx-2 text-red-400">FrontEnd developer 🧑‍💻</span>
        </p>

        <p className="pt-3">
          Experienced Software Engineer with a demonstrated history of working
          in the logistics and supply chain and Information Technology Industry.
          Skilled in Github, Python (Programming Language), Front-end
          Development, and Django. Strong engineering professional with a
          Bachelor&apos;s degree focused in Computer Science from Marathwada
          Institute of Technology Engineering College, Aurangabad.
        </p>
        <p className="pt-3">
          I&apos;m starting my journey to become a renowned FrontEnd developer.
          I developed this platform in order to keep my creativity loop in check
        </p>
        <p className="pt-3">
          I&apos;m currently learning Figma and will be posting figma design and
          code snippets of HTML, CSS and javascript every week day until I reach
          streak of 100 days, to practice consistency and improve my skills <br />
          I got the idea and inspiration of this platform from  
        </p>

        <p className="pt-3">
          If you&apos;re interested in my journey stay tuned, and if you&apos;d like to
          get in touch feel free to drop me a message at{" "}
          <a
            href="mailto: abc@example.com"
            className="text-red-400 hover:border-b"
          >
            rawasaditya@gmail.com
          </a>
          .
        </p>
        <p className="pt-3">
            Idea and inspiration of the platform is from &nbsp; 
        <a
            href="https://uidesigndaily.com/about"
            target="_blank"
            rel="noreferrer"
            className="text-red-400 hover:border-b"
          > 
            Ildiko
          </a>
        </p>
      </div>
    </div>
  );
};

export default about;
