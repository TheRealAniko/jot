import { Info } from "lucide-react";

const MarkdownInfo = () => {
    return (
        <div className="collapse bg-background border border-border rounded-lg mt-10 ">
            <input type="checkbox" />
            <div className="collapse-title flex gap-5  ">
                <Info /> Want to style your thoughts? Here’s how:
            </div>
            <div className="collapse-content text-sm leading-relaxed space-y-4">
                {/* Text Formatting */}
                <div>
                    <h3 className="font-base flex border-b border-border pb-2 mb-3 pl-2">
                        {" "}
                        Text Formatting
                    </h3>
                    <p>
                        <strong>Bold:</strong> <code>**text**</code> →{" "}
                        <strong>text</strong>
                    </p>
                    <p>
                        <em>Italic:</em> <code>*text*</code> → <em>text</em>
                    </p>
                    <p>
                        <s>Strikethrough:</s> <code>~~text~~</code> →{" "}
                        <s>text</s>
                    </p>
                </div>

                {/* Lists */}
                <div>
                    <h3 className="font-base flex border-b border-border pb-2 mb-3 pl-2">
                        Lists
                    </h3>
                    <p>
                        <pre>
                            - Item 1{"\n"}- Item 2{"\n"}
                        </pre>
                        →
                        <ul className="list-disc list-inside">
                            <li>Item 1</li>
                            <li>Item 2</li>
                        </ul>
                    </p>
                </div>

                {/* Links & Images */}
                <div>
                    <h3 className="font-base flex border-b border-border pb-2 mb-3 pl-2">
                        Links & Images
                    </h3>
                    <p>
                        <strong>Link:</strong>{" "}
                        <code>[Link Text](https://example.com)</code> →{" "}
                        <a
                            href="https://example.com"
                            className="text-primary hover:underline"
                            target="_blank"
                            rel="noopener noreferrer">
                            Link Text
                        </a>
                    </p>
                    <p>
                        <strong>Image:</strong>{" "}
                        <code>
                            ![Alt Text](https://loremflickr.com/320/240)
                        </code>{" "}
                        →
                    </p>
                    <img
                        src="https://loremflickr.com/320/240"
                        alt="Example Image"
                        className="rounded-lg border border-border my-5"
                    />
                </div>
            </div>
        </div>
    );
};

export default MarkdownInfo;
