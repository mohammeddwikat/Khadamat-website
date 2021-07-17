import { connect, useSelector } from 'react-redux';
import axios from 'axios';
import { useState, useEffect } from 'react';

const url = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJwaG9uZSI6IjA1OTkxNDkyNyIsIlNTTiI6IjA1OTkxNDkyNyIsImV4cGlyYXRpb25UaW1lIjozMDAwMDAwMDAwMDAwMDB9.gJys88xiZR6_Q_z0t6m9kIMweb6gxkoQ9UnrjEoaChA"

function parseJwt (token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
};

const TextTest = () => {
  const text = useSelector(state => state.Reducer2.text)
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    


    console.log(parseJwt(url))
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=5d9b8825bc3157243a97a507eb61ecc6')
    .then((res) => {
      setResponse(res.data.main);
    })
    .catch((err) => {
      setError(err);
    })
    .finally(() => {
      setLoading(false);
    });
  }, []);
  const loadingElements = () => {
    let arr = []
    for(let i=0; i < 6; i+=1){
      arr.push(<li key={i}>Loading...</li>)        
    }
    return arr;
  }
  return(
    <div>
      <div>
            <h1>Posts</h1>

            {loading ? (
                <div>
                  <ul>
                    {
                      loadingElements()
                    }
                  </ul>
                  </div>
            ) : (
                <div>
                    {error && (
                        <div>
                            <p>{error.message}</p>
                        </div>
                    )}
                    <div>
                      {response && 
                      <ul>
                        {
                          Object.keys(response).map(key2 => <li key={key2}>{key2} : {response[key2]} </li>)
                        }
                      </ul>
                      }
                    </div>
                </div>
            )}
        </div>
      text: {text}
    </div>
  )
}


function mapStateToProps(state) {
  return {
    text: state.Reducer2.text
  };
}

export default connect(mapStateToProps)(TextTest);

