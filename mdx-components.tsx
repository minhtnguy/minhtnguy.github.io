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
			<h1 className="md:text-4xl text-3xl text-primary-black font-bold">
				{children}
			</h1>
		),
		h2: ({ children }) => (
			<h2 className="md:text-3xl text-2xl text-primary-black font-bold mt-10">
				{children}
			</h2>
		),
		h3: ({ children }) => (
			<h3 className="md:text-2xl text-xl text-primary-black font-bold mt-10">
				{children}
			</h3>
		),
		h4: ({ children }) => (
			<h4 className="md:text-xl text-base text-primary-black font-semibold mt-10">
				{children}
			</h4>
		),
		h5: ({ children }) => (
			<h5 className="md:text-lg text-base text-primary-black font-semibold mt-10">
				{children}
			</h5>
		),
		p: ({ children }) => (
			<p className="md:text-lg text-base text-primary-black mt-2">{children}</p>
		),
		ul: ({ children }) => (
			<ul className="text-base text-primary-black">{children}</ul>
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
			<img src={src} alt={alt} className="my-10 flex justify-center"></img>
		),
	};
}
