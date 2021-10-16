import "./Tags.css"
import React from "react";

const TagsInput = props => {
    const [tags, setTags] = React.useState(props.tags);
    const removeTags = indexToRemove => {
        setTags([...tags.filter((_, index) => index !== indexToRemove)]);
    };
    const addTags = event => {
        if (event.target.value !== "") {
            setTags([...tags, event.target.value]);
            props.selectedTags([...tags, event.target.value]);
            event.target.value = "";
        }
    };
    return (
        <div className="p-5">
            <div className="pb-3">
            <label>Tags:</label>
            </div>
            <div className="tags-input">

                <ul id="tags">
                    {tags.map((tag, index) => (
                        <li key={index} className="tag">
                            <span className='tag-title'>{tag}</span>
                            <span className='tag-close-icon'
                                onClick={() => removeTags(index)}
                            >
                                X
                            </span>
                        </li>
                    ))}
                </ul>

                <input
                className="w-full"
                    type="text"
                    onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
                    placeholder="Press enter to add tags"
                />
            </div>
        </div>
    );
};

export default function Tags() {
    const selectedTags = tags => {
        console.log(tags);
    };
    return (
        <div className="Tag">
            <TagsInput selectedTags={selectedTags} tags={[]} />
        </div>
    );
};