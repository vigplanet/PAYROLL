import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { MdEditorOption, UploadResult } from 'ngx-markdown-editor';

@Component({
  selector: 'ico-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.scss']
})
export class MarkdownComponent implements OnInit {
  public options: MdEditorOption = {
    showPreviewPanel: false,
    enablePreviewContentClick: false,
    resizable: true,
    customRender: {
      image: function(href: string, title: string, text: string) {
        let out = `<img style="max-width: 100%; border: 20px solid red;" src="${href}" alt="${text}"`;
        if (title) {
          out += ` title="${title}"`;
        }
        out += (<any>this.options).xhtml ? "/>" : ">";
        return out;
      }
    }
  };
  public content: string;
  public mode: string = "editor";

  constructor() {
    this.preRender = this.preRender.bind(this);
    this.postRender = this.postRender.bind(this);

    let contentArr = ["# Hello, Markdown Editor!"];
    contentArr.push("```javascript ");
    contentArr.push("function Test() {");
    contentArr.push('	console.log("Test");');
    contentArr.push("}");
    contentArr.push("```");
    contentArr.push(" Name | Type");
    contentArr.push(" ---- | ----");
    contentArr.push(" A | Test");
    contentArr.push(
      "![](http://lon-yang.github.io/markdown-editor/favicon.ico)"
    );
    contentArr.push("");
    contentArr.push("- [ ] Taks A");
    contentArr.push("- [x] Taks B");
    contentArr.push("- test");
    contentArr.push("");
    contentArr.push("[Link](https://www.google.com)");
    contentArr.push("");
    this.content = contentArr.join("\r\n");

  }

  ngOnInit() {
  }

  togglePreviewPanel() {
    this.options.showPreviewPanel = !this.options.showPreviewPanel;
    this.options = Object.assign({}, this.options);
  }

  changeMode() {
    if (this.mode === "editor") {
      this.mode = "preview";
    } else {
      this.mode = "editor";
    }
  }

  togglePreviewClick() {
    this.options.enablePreviewContentClick = !this.options
      .enablePreviewContentClick;
    this.options = Object.assign({}, this.options);
  }

  toggleResizeAble() {
    this.options.resizable = !this.options.resizable;
    this.options = Object.assign({}, this.options);
  }

  onEditorLoaded(editor) {
    console.log(`ACE Editor Ins: `, editor);
    // editor.setOption('showLineNumbers', false);

    // setTimeout(() => {
    //   editor.setOption('showLineNumbers', true);
    // }, 2000);
  }

  preRender(mdContent) {
    console.log(`preRender fired`);
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve(mdContent);
    //   }, 4000);
    // })
    return mdContent;
  }

  postRender(html) {
    console.log(`postRender fired`);
    // return '<h1>Test</h1>';
    return html;
  }

  onPreviewDomChanged(dom: HTMLElement) {
    console.log(dom);
    console.log(dom.innerHTML);
  }
}
