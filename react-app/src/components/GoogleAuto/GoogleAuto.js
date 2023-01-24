import React from 'react';
import { useState } from 'react';
// import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete';

export default function Google() {
    // const dispatch = useDispatch()
    const [ address, setAddress ] = useState('');
    const [coordinates, setCoordinates] = useState({
        lat:null,
        lng: null
    })

    const handleSelect = async value => {
        const results = await geocodeByAddress(value)
        const ll = await getLatLng(results[0])
        setAddress(value)
        setCoordinates(ll)
    }

    return (
        <>
        <p>Address: {address}</p>

      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      <iframe
  width="450"
  height="250"
  frameborder="0"
  style={{border:0}}
  referrerpolicy="no-referrer-when-downgrade"
  src={`https://www.google.com/maps/embed/v1/search?key=AIzaSyDzNAUy0rhFEfpmMD7UvAShcRXzBnDh7aQ&q=near+${coordinates.lat || 34.411953},+${coordinates.lng || -119.697159}`}
  allowfullscreen>
</iframe>
      </>

    );
  }
