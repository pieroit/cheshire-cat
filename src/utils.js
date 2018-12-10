
import React from 'react'

let utils = {
    jsonPrettyPrint: function(obj) {
        
        let prettyJSON = JSON.stringify(obj, undefined, 4)

        return (
            <pre>
                {prettyJSON}
            </pre>
        )
    }
}

export default utils