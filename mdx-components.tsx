import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import React from "react";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		// Allows customizing built-in components, e.g. to add styling.
		h1: ({ children }) => (
			<h1 className="md:text-xl mb-2 text-xl text-primary-black font-semibold">
				{children}
			</h1>
		),
		h2: ({ children }) => (
			<h2 className="text-base mb-2 text-primary-black font-semibold mt-10">
				{children}
			</h2>
		),
		h3: ({ children }) => (
			<h3 className="text-base mb-2 text-primary-black font-medium mt-10">
				{children}
			</h3>
		),
		h4: ({ children }) => (
			<h4 className="md:text-xl text-lg text-primary-black font-semibold mt-10">
				{children}
			</h4>
		),
		h5: ({ children }) => (
			<h5 className="md:text-lg text-base text-primary-black font-semibold mt-10">
				{children}
			</h5>
		),
		p: ({ children }) => (
			<p className="text-base text-primary-black mb-4 leading-relaxed">
				{children}
			</p>
		),
		ul: ({ children }) => (
			<ul className="list-disc space-y-4 ml-5 text-base text-primary-black">
				{children}
			</ul>
		),
		li: ({ children }) => (
			<li className="text-base text-primary-black">{children}</li>
		),
		a: ({ children, href }) => (
			<a
				href={href}
				target="_blank"
				className="text-base text-primary-black underline underline-offset-4 hover:text-primary-blue cursor-pointer "
			>
				{children}
			</a>
		),
		img: ({ src, alt }) => (
			<div className="flex justify-center my-10">
				<Image src={src} alt={alt} width={1200} height={675} className="" />
			</div>
		),
		strong: ({ children }) => (
			<strong className="text-base text-primary-black font-semibold">
				{children}
			</strong>
		),
	};
}
