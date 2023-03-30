import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {BASE_URL} from '../config/configuration'
import Home from './Home'

const AppSearch = () => {

	const [myOptions, setMyOptions] = useState([])
	const [myValue, setMyValue] = useState('')
	const [loader, setLoader] = useState(false)
	const [data, setData] = useState([])
	const getDataFromAPI = (value) => {
		setLoader(true)
		fetch(`${BASE_URL}/applications`).then((response) => {
			return response.json()
		}).then((res) => {
			for (var i = 0; i < res.length; i++) {
				if (res[i] === value) {
					setMyValue(res[i])
					fetch(`${BASE_URL}/applications/${res[i]}`).then((response) => {
						return response.json()
					}).then((res) => {
						setData(res)
						setLoader(false)
					}).catch((err) => console.log(err))
				}
			}
		})
	}
	return (
		<>
		<Home />
			<div style={{ margin: "40px 40px 40px 40px" }}>
				<h3>Search Application</h3>
				<Autocomplete
					style={{ width: "40vw" }}
					freeSolo
					autoComplete
					autoHighlight
					options={myOptions}
					renderInput={(params) => (
						<TextField {...params}
							onChange={(e) => getDataFromAPI(e.target.value)}
							variant="outlined"
							label="Type to search..."
						/>
					)}
				/>

				{
					loader ?
						<div style={{ fontSize: '40px', textAlign: 'center', margin: '100px 0px' }} > Loading .... </div>
						:
						<div className="App" style={{ margin: '50px 0px' }} >
							<table>
								<tbody>
									<tr>
										<th>ConsumedQuantity</th>
										<th>Cost</th>
										<th>Date</th>
										<th>InstanceId</th>
										<th>MeterCategory</th>
										<th>ResourceGroup</th>
										<th>ResourceLocation</th>
										<th>Tags</th>
										<th>UnitOfMeasure</th>
										<th>Location</th>
										<th>ServiceName</th>
									</tr>
									{data.map((val, key) => {
										return (
											<tr key={key}>
												<td>{val.ConsumedQuantity}</td>
												<td>{val.Cost}</td>
												<td>{val.Date}</td>
												<td>{val.InstanceId}</td>
												<td>{val.MeterCategory}</td>
												<td>{val.ResourceGroup}</td>
												<td>{val.ResourceLocation}</td>
												<td><li>{val.Tags['app-name']}</li><li>{val.Tags.environment}</li><li>{val.Tags['business-unit']}</li></td>
												<td>{val.UnitOfMeasure}</td>
												<td>{val.Location}</td>
												<td>{val.ServiceName}</td>
											</tr>
										)
									})}
								</tbody>
							</table>
						</div>
				}
			</div>
		</>
	);
}

export default AppSearch; 