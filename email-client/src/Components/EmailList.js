import EmailListObject from "./EmailListObject";

const EmailList = props => {
    console.log(props.emails)
    return(
        <div className={'email-list'}>
            {
                props.emails.map((email, key) =>
                     <EmailListObject
                        key = {key}
                        email = {email}
                        clickHandler = {props.clickHandler}
                    />
                )
            }
        </div>
    )


}

export default EmailList;