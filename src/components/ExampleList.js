import React from 'react';

import ExampleLink from './ExampleLink';

function ExampleList(props) {

    const searchParser = d => {
        const searchArray = props.files[d].map(e => {
            return e.indexOf(props.search) !== -1;
        })
        return {
            queried: searchArray,
            filtered: searchArray.filter(el => el)
        };
    }

    return (
        <div width='20%' style={{textAlign: 'left'}}>
            {Object.keys(props.files).map(d => {
                const searchArray = searchParser(d);
                return searchArray.filtered.length > 0
                    ?   <div key={d} className='linkList'>{d} {
                            searchArray.queried.map((e, i) => {
                                const fileInfo = props.files[d][i];
                                return e
                                    ? <ExampleLink key={fileInfo} file={fileInfo}/>
                                    : null;
                            })
                        }
                        </div>
                    : null;
                })
            }
            <br/>
            <br/>
        </div>
    )
}

export default ExampleList;
