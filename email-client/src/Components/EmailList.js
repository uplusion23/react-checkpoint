import EmailListObject from "./EmailListObject";

const EmailList = props => {
    return(
        <div className={'email-list'}>
            <div className={'email-list-header'}>
              <div className={'content'}>
                <h2>All Inboxes</h2>
                <span>{props.emails.length} Messages</span>
              </div>
              <i className={'gg-feed'} />
            </div>
          <div className={'list'}>
            {
                props.emails.sort((a, b) => {
                  return new Date(b.date) - new Date(a.date);
                }).map((email, key) =>
                     <EmailListObject
                        key = {key}
                        email = {email}
                        clickHandler = {props.clickHandler}
                    />
                )
            }
          </div>
        </div>
    )


}

export default EmailList;