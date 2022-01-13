import React from 'react';
import './App.css';

import 'tippy.js/dist/tippy.css'
import {
    createPlateUI,
    HeadingToolbar,
    MentionCombobox,
    Plate,
    createAlignPlugin,
    createAutoformatPlugin,
    createBlockquotePlugin,
    createBoldPlugin,
    // createCodeBlockPlugin,
    createCodePlugin,
    createExitBreakPlugin,
    createHeadingPlugin,
    createHighlightPlugin,
    createKbdPlugin,
    createImagePlugin,
    createItalicPlugin,
    createLinkPlugin,
    createListPlugin,
    createMediaEmbedPlugin,
    createNodeIdPlugin,
    createParagraphPlugin,
    createResetNodePlugin,
    createSelectOnBackspacePlugin,
    createSoftBreakPlugin,
    createDndPlugin,
    createStrikethroughPlugin,
    createSubscriptPlugin,
    createSuperscriptPlugin,
    createTablePlugin,
    createTodoListPlugin,
    createTrailingBlockPlugin,
    createUnderlinePlugin,
    createComboboxPlugin,
    createMentionPlugin,
    createIndentPlugin,
    createFontColorPlugin,
    createFontBackgroundColorPlugin,
    createDeserializeMdPlugin,
    createDeserializeCsvPlugin,
    createNormalizeTypesPlugin,
    createFontSizePlugin,
    createHorizontalRulePlugin,
    createPlugins,
    createDeserializeDocxPlugin,
    createJuicePlugin,
} from '@udecode/plate'
import {
    createExcalidrawPlugin,
    ELEMENT_EXCALIDRAW,
    ExcalidrawElement,
} from '@udecode/plate-ui-excalidraw'
import {MarkBallonToolbar, ToolbarButtons} from './config/components/Toolbars'
import {withStyledPlaceHolders} from './config/components/withStyledPlaceHolders'
import {withStyledDraggables} from './config/components/withStyledDraggables'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import {MENTIONABLES} from './config/mentionables'
import {CONFIG} from './config/config'
// import { VALUES } from './config/values/values'

// Migrate to v8 - Part 1: https://www.loom.com/share/71596199ad5a47c2b58cdebab26f4642
// Migrate to v8 - Part 2: https://www.loom.com/share/d85c89220ffa4fe2b6f934a6c6530689
// Migrate to v8 - Part 3: https://www.loom.com/share/c1bf20e18d8a42f8a55f8a28ab605148

const id = 'Examples/Playground'

let components = createPlateUI({
    [ELEMENT_EXCALIDRAW]: ExcalidrawElement,
    // customize your components by plugin key
})
components = withStyledPlaceHolders(components)
components = withStyledDraggables(components)
const initialValue = [
    {
        type: 'h1',
        children: [
            {
                text:
                    '',
            },
        ],
    },
    {
        type: 'p',
        children: [
            {
                text:
                    'This is editable plain text with react and history plugins, just like a <textarea>!',
            },
        ],
    },
];

const RichTextEditor = () => {
    const plugins = createPlugins(
        [
            createParagraphPlugin(),
            createBlockquotePlugin(),
            createTodoListPlugin(),
            createHeadingPlugin(),
            createImagePlugin(),
            createHorizontalRulePlugin(),
            createLinkPlugin(),
            createListPlugin(),
            createTablePlugin(),
            createMediaEmbedPlugin(),
            createExcalidrawPlugin(),
            // createCodeBlockPlugin(),
            createAlignPlugin(CONFIG.align),
            createBoldPlugin(),
            createCodePlugin(),
            createItalicPlugin(),
            createHighlightPlugin(),
            createUnderlinePlugin(),
            createStrikethroughPlugin(),
            createSubscriptPlugin(),
            createSuperscriptPlugin(),
            createFontColorPlugin(),
            createFontBackgroundColorPlugin(),
            createFontSizePlugin(),
            createKbdPlugin(),
            createNodeIdPlugin(),
            createDndPlugin(),
            createIndentPlugin(CONFIG.indent),
            createAutoformatPlugin(CONFIG.autoformat),
            createResetNodePlugin(CONFIG.resetBlockType),
            createSoftBreakPlugin(CONFIG.softBreak),
            createExitBreakPlugin(CONFIG.exitBreak),
            createNormalizeTypesPlugin(CONFIG.forceLayout),
            createTrailingBlockPlugin(CONFIG.trailingBlock),
            createSelectOnBackspacePlugin(CONFIG.selectOnBackspace),
            createComboboxPlugin(),
            createMentionPlugin(),
            createDeserializeMdPlugin(),
            createDeserializeCsvPlugin(),
            createDeserializeDocxPlugin(),
            createJuicePlugin(),
        ],
        {
            components,
        }
    )

    // @ts-ignore
    return (
        <DndProvider backend={HTML5Backend}>
            <Plate
                id={id}
                editableProps={CONFIG.editableProps}
                initialValue={initialValue}
                plugins={plugins}
            >
                {/*<HeadingToolbar>*/}
                {/*    <ToolbarButtons/>*/}
                {/*</HeadingToolbar>*/}

                <MarkBallonToolbar/>
                {/*@ts-ignore*/}
                {/*                <MentionCombobox items={initialValue}/>*/}
            </Plate>
        </DndProvider>
    )
}

// const rootElement = document.getElementById('root')
// ReactDOM.render(<Plugins />, rootElement)

export default RichTextEditor;
