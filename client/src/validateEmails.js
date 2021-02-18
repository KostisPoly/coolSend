const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// const pattern = new RegExp(regex);

export default (emails) => {
    
    const invalidEmails = emails
            .split(',')
            .map(email => email.trim())
            .filter(email => regex.test(email) === false);

    if( invalidEmails.length) {
        return `The following email are invalid: ${invalidEmails}`;
    }

    return;
}