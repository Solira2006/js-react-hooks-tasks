import React, { useRef, useEffect } from 'react';
import Editor from '@toast-ui/editor';

const MarkdownEditor = ({ onContentChange }) => {
  // BEGIN (write your solution here)
  const editorRef = useRef(null);
  const editorInstanceRef = useRef(null);

  useEffect(() => {
    editorInstanceRef.current = new Editor({
      el: editorRef.current,
      hideModeSwitch: true,
    });

    editorInstanceRef.current.addHook('change', () => {
      const content = editorInstanceRef.current.getMarkdown();
      onContentChange(content);
    });

    return () => {
      if (editorInstanceRef.current) {
        editorInstanceRef.current.removeHook('change');
      }
    };
  }, [onContentChange]);

  return <div ref={editorRef} />;
  // END
};

export default MarkdownEditor;