import { React, useState } from "react";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Button from '@material-ui/core/Button';
import Display from '../Display/Display'
import './search.css'


const Search = () => {
    const [citys, setCity] = useState('')
    const [humiditys, setHumidity] = useState('')
    const [temp, setTemp] = useState('')

    const ApiData = (val) => {

        // eslint-disable-next-line no-restricted-globals
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${val}&units=metric&appid=e409e90475b3b569c06c30191d9fa161`)
            .then(function (resp) { return resp.json() })
            .then((data) => {
                setCity(data.name);
                setHumidity(data.main.humidity);
                setTemp(data.main.temp)
            }).catch((err) => {
                setCity('');
                setHumidity('');
                setTemp('')
            })

        document.getElementById('input-with-icon-grid').value = null;
    }

    return (
        <div className="father">
            <div className="search-bar">
                <div className='search-container'>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <Brightness5Icon />
                        </Grid>
                        <Grid item>
                            <TextField InputLabelProps={{
                                style: { color: '#fff' },
                            }}
                                id="input-with-icon-grid" label="Search country" />
                        </Grid>
                    </Grid>
                </div>
                <Button id='button-search' onClick={() => ApiData(document.getElementById('input-with-icon-grid').value)}>
                    Search
                </Button>
            </div>


            <Display city={citys} humidity={humiditys} temperature={temp} />
        </div>
    )
}

export default Search