/**
 * @license Copyright (c) 2014-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
 import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';
 import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
 import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js';
 import Autosave from '@ckeditor/ckeditor5-autosave/src/autosave.js';
 import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';
 import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
 import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock.js';
 import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
 import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js';
 import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily.js';
 import FontSize from '@ckeditor/ckeditor5-font/src/fontsize.js';
 import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
 import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight.js';
 import Image from '@ckeditor/ckeditor5-image/src/image.js';
 import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption.js';
 import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert.js';
 import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize.js';
 import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle.js';
 import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar.js';
 import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js';
 import Indent from '@ckeditor/ckeditor5-indent/src/indent.js';
 import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
 import Link from '@ckeditor/ckeditor5-link/src/link.js';
 import List from '@ckeditor/ckeditor5-list/src/list.js';
 import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed.js';
 import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
 import Table from '@ckeditor/ckeditor5-table/src/table.js';
 import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
 import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js';
 import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js';

export default class NeurondEditor extends ClassicEditor {}

// Plugins to include in the build.
NeurondEditor.builtinPlugins = [
	Autoformat,
	UploadAdapter,
	Autosave,
	BlockQuote,
	Bold,
	CodeBlock,
	Essentials,
	FontColor,
	FontFamily,
	FontSize,
	Heading,
	Highlight,
	Image,
	ImageCaption,
	ImageInsert,
	ImageResize,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	Italic,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	Table,
	TableCellProperties,
	TableToolbar,
	TextTransformation
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'fontFamily',
			'fontSize',
			'fontColor',
			'bulletedList',
			'numberedList',
			'link',
			'|',
			'outdent',
			'indent',
			'|',
			'imageInsert',
			'blockQuote',
			'insertTable',
			'mediaEmbed',
			'codeBlock',
			'highlight',
			'undo',
			'redo'
		]
	},
	image: {
		toolbar: [
			'imageStyle:full',
			'imageStyle:side',
			'|',
			'imageTextAlternative'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
