import axios from 'axios';
const baseAddress = 'http://localhost:3001';

const GetEmails = async () => {
    try {
        const emails = await axios.get(baseAddress + '/emails');
        return emails.data;
    } catch (e) {
        throw new Error(e);
    }
}

const GetEmail = async id => {
    try {
        const email = await axios.get(baseAddress + '/emails/' + id);
        return email.data;
    } catch (e) {
        throw new Error(e);
    }
}

const SendEmail = async (email = {
    recipient: "",
    subject: "<No Subject",
    message: ""
}) => {
    const emailObject = {
        ...email,
        sender: "jane@galvanize.com",
        date: (new Date()).toISOString()
    }

    try {
        await axios.post(baseAddress + '/send', emailObject).then(response => {
            return response;
        });
    } catch (e) {
        throw new Error(e);
    }
}

export default {
    GetEmail,
    GetEmails,
    SendEmail
}