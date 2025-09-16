"use client";
import type { ForwardedRef } from "react";
import {
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  type MDXEditorMethods,
  type MDXEditorProps,
  toolbarPlugin,
  BoldItalicUnderlineToggles,
  UndoRedo,
  CodeToggle,
  CreateLink,
  BlockTypeSelect,
  ChangeAdmonitionType,
  InsertCodeBlock,
  InsertImage,
  InsertTable,
  InsertThematicBreak,
  ListsToggle,
  linkDialogPlugin,
  InsertFrontmatter,
  insertFrontmatter$,
  imagePlugin,
  tablePlugin,
  codeBlockPlugin,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import { cn } from "@/lib/utils";

const toolbar = toolbarPlugin({
  toolbarClassName: "",
  toolbarPosition: "top",
  toolbarContents: () => (
    <>
      <UndoRedo />
      <BoldItalicUnderlineToggles />
      <CodeToggle />
      <CreateLink />
      <BlockTypeSelect />
      <InsertCodeBlock />
      <InsertImage />
      <InsertTable />
      <InsertThematicBreak />
      <ListsToggle />

      {/* <InsertFrontmatter /> */}
      {/* <ChangeAdmonitionType/> */}
    </>
  ),
});

// Only import this to the next file
export default function InitializedMDXEditor({
  editorRef,
  ...props
}: { editorRef: ForwardedRef<MDXEditorMethods> | null } & MDXEditorProps) {
  return (
    <MDXEditor
      className={cn(props.className, proseTheme)}
      contentEditableClassName="prose max-w-full"
      plugins={[
        toolbar,
        // Example Plugin Usage
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
        markdownShortcutPlugin(),
        linkDialogPlugin(),
        imagePlugin(),
        tablePlugin(),
        codeBlockPlugin({ defaultCodeBlockLanguage: "txt" }),

        // InsertFrontmatter(),
      ]}
      {...props}
      ref={editorRef}
    />
  );
}

const proseTheme = `
prose-headings:text-base-content	
prose-lead:text-base-content	
prose-h1:text-base-content	
prose-h2:text-base-content	
prose-h3:text-base-content	
prose-h4:text-base-content	
prose-p:text-base-content	
prose-a:text-base-content	
prose-blockquote:text-base-content	
prose-figure:text-base-content	
prose-figcaption:text-base-content	
prose-strong:text-base-content	
prose-em:text-base-content	
prose-kbd:text-base-content	
prose-code:text-base-content	
prose-pre:text-base-content	
prose-ol:text-base-content	
prose-ul:text-base-content	
prose-li:text-base-content	 
prose-thead:text-base-content	
prose-tr:text-base-content	
prose-th:text-base-content	
prose-td:text-base-content	
prose-img:text-base-content	
prose-video:text-base-content	
prose-hr: 
`;
