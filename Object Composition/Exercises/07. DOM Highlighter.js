function domHighlighter(selector) {
    let start = $(selector);
    let maxDepth = 0;
    let maxDepthElement = start;

    function setDepth(depth, element) {
        if (depth > maxDepth) {
            maxDepth = depth;
            maxDepthElement = $(element);
        }
        let children = $(element).children();
        children.each((index, element) => setDepth(depth + 1, element));
    }

    setDepth(maxDepth, start);
    maxDepthElement.addClass('highlight');
    maxDepthElement.parents().addClass('highlight');
    start.parents().removeClass('highlight');



}

