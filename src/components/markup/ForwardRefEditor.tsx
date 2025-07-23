"use client";
// ForwardRefEditor.tsx
import dynamic from "next/dynamic";
import { forwardRef } from "react";
import { type MDXEditorMethods, type MDXEditorProps } from "@mdxeditor/editor";

// This is the only place InitializedMDXEditor is imported directly.
const Editor = dynamic(() => import("./InitializedMDXEditor"), {
  // Make sure we turn SSR off
  ssr: false,
});
const Viewer = dynamic(() => import("./InitializedMDXViewer"), {
  // Make sure we turn SSR off
  ssr: false,
});

// This is what is imported by other components. Pre-initialized with plugins, and ready
// to accept other props, including a ref.
export const MyMDXEditor = forwardRef<MDXEditorMethods, MDXEditorProps>(
  (props, ref) => <Editor {...props} editorRef={ref} />,
);

export const MyMDXViewer = forwardRef<MDXEditorMethods, MDXEditorProps>(
  (props, ref) => <Viewer {...props} />,
);

// TS complains without the following line
MyMDXEditor.displayName = "MyMDXEditor";
MyMDXViewer.displayName = "MyMDXViewr";
