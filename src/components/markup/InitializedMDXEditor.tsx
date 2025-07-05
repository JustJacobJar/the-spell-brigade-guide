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

const toolbar = toolbarPlugin({
  toolbarClassName: "my-classname",
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
      className="dark-theme dark-editor"
      contentEditableClassName="prose prose-pink max-w-full"
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

export function InitializedMDXViewer({ ...props }: MDXEditorProps) {
  return (
    <MDXEditor
      className="dark-theme dark-editor bg-amber-50/10"
      readOnly
      contentEditableClassName="prose prose-pink max-w-full w-full"
      plugins={[
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
    />
  );
}

const proseTheme = `
prose-headings:	
prose-lead:	
prose-h1:	
prose-h2:	
prose-h3:	
prose-h4:	
prose-p:	
prose-a:	
prose-blockquote:	
prose-figure:	
prose-figcaption:	
prose-strong:	
prose-em:	
prose-kbd:	
prose-code:	
prose-pre:	
prose-ol:	
prose-ul:	
prose-li:	 
prose-thead:	
prose-tr:	
prose-th:	
prose-td:	
prose-img:	
prose-video:	
prose-hr: 
`;
