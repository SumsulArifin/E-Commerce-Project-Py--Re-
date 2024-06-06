import React from 'react';

// Define VideoList component
function VideoList({ videos, emptyHeading }) {
    const count = videos.length;
    let heading = emptyHeading;

    if (count > 0) {
        const noun = count > 1 ? 'Videos' : 'Video';
        heading = count + ' ' + noun;
    }

    return (
        <section>
            <h2>{heading}</h2>
            {videos.map(video => (
                <Video key={video.id} video={video} />
            ))}
        </section>
    );
}

// Define boody component
function Boody() {
    const videos = [
        { id: 1, title: "Video 1" },
        { id: 2, title: "Video 2" }
    ];

    return (
        <>
            <VideoList videos={videos} emptyHeading="No Videos Available" />
        </>
    );
}

// Example Video component for rendering individual videos
function Video({ video }) {
    return (
        <div>
            <h3>{video.title}</h3>
        </div>
    );
}

export default Boody;
