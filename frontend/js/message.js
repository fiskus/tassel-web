function Message (msg, type) {
    switch (type) {
        case 'success': {
            console.info(msg);
        }
        case 'error': {
            console.error(msg);
        }
        default: {
            console.log(msg);
        }
    }
}

export default Message;
