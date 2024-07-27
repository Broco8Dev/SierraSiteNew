function openUrlInNewTab(url) {
    if (url && typeof url === 'string') {
        window.open(url, '_blank');
    } else {
        console.error('Invalid URL');
    }
}

function switchPage(url) {
    if (url && typeof url === 'string') {
        window.location.href = url;
    } else {
        console.error('Invalid URL');
    }
}

