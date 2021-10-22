import axios from 'axios';
const baseAddress = 'http://localhost:3001';

const GetEmails = async () => {
    try {
        const emails = await axios.get(baseAddress + '/emails');
        return emails.data;
    } catch (e) {
        console.error(e);
        return [
            {
                recipient: "nobody@domain.com",
                sender: "nobody@domain.com",
                subject: "Error fetching emails.",
                message: e.toString(),
                date: new Date(),
                id: 0
            }
        ];
    }
}

const GetEmail = async id => {
    try {
        const email = await axios.get(baseAddress + '/emails/' + id);
        return email.data;
    } catch (e) {
        console.error(e);
        return {
            error: e
        }
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
        console.error(e);
        return {
            error: e
        }
    }
}

export default {
    GetEmail,
    GetEmails,
    SendEmail
}