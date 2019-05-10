import React from 'react'

const Form = ({ handleChange, handleSubmit, data, errors, houses }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Artist</label>
        <div className="control">
          <input
            className="input"
            name="artist"
            placeholder="eg: The Kinks"
            onChange={handleChange}
            value={data.name || ''}
          />
        </div>
        {errors.name && <div className="help is-danger">{errors.name}</div>}
      </div>
      <div className="field">
        <label className="label">Title</label>
        <div className="control">
          <input
            className="input"
            name="title"
            placeholder="eg: The Kinks are the Village Green Preservation Society"
            onChange={handleChange}
            value={data.title || ''}
          />
        </div>
        {errors.title && <div className="help is-danger">{errors.title}</div>}
      </div>
      <div className="field">
        <label className="label">Image</label>
        <div className="control">

          <input
            name="image"
            placeholder="eg: https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/TheKinksVillageGreenPreservationSociety.jpg/220px-TheKinksVillageGreenPreservationSociety.jpg"
            onChange={handleChange}
            value={data.image || ''}
          /  >


        </div>
        {errors.image && <div className="help is-danger">{errors.image}</div>}
      </div>
      <div className="field">
        <label className="label">Release Year</label>
        <div className="control">

          <input
            name="releaseYear"
            onChange={handleChange}
            value={data.releaseYear || ''}
          />


        </div>
        {errors.releaseYear && <div className="help is-danger">{errors.releaseYear}</div>}
      </div>
      <div className="field">
        <label className="label">Genre</label>
        <div className="control">
        <div className="select is-fullwidth">
          <select
            name="genre"
            onChange={handleChange}
            value={data.genre || ''}
          >
            <option value="" disabled>Please choose...</option>
            <option value="Rock & Roll">Rock & Roll</option>
            <option value="Jazz">Jazz</option>
            <option value="Hip-Hop">Hip-Hop</option>
            <option value="Heavy Metal">Heavy Metal</option>
            <option value="Country">Country</option>
            <option value="Punk">Punk</option>
            <option value="Alternative Rock">Alternative Rock</option>
            <option value="Techno">Techno</option>
            <option value="Funk">Funk</option>
            <option value="Pop">Pop</option>
            <option value="Electro">Electro</option>
            <option value="Reggae">Reggae</option>
            <option value="Experimental">Experimental</option>
            <option value="Folk">Folk</option>
            <option value="Drum n Bass">Drum n Bass</option>
            <option value="Soundtrack">Soundtrack</option>
            <option value="RnB">RnB</option>
            <option value="Blues">Blues</option>
            <option value="Classical">Classical</option>
            <option value="Gospel">Gospel</option>
            <option value="Ska">Ska</option>
          </select>
        </div>
        {errors.genre && <div className="help is-danger">{errors.genre}</div>}
      </div>
      <div className="field">
        <label className="label">Condition</label>
        <div className="control">
        <div className="select is-fullwidth">
            <select
              name="condition"
              onChange={handleChange}
              value={data.condition || ''}
            >
              <option value="" disabled>Please choose...</option>
              <option value="Mint">Mint</option>
              <option value="Near-Mint">Near-Mint</option>
              <option value="Very Good">Very Good</option>
              <option value="Good">Good</option>
              <option value="Fair">Fair</option>
            </select>
        </div>
        {errors.condition && <div className="help is-danger">{errors.condition}</div>}
      </div>
      <div className="field">
        <label className="label">Length</label>
        <div className="control">
          <input
            className="input"
            name="length"
            placeholder="eg: 45:33"
            onChange={handleChange}
            value={data.title || ''}
          />
        </div>
        {errors.title && <div className="help is-danger">{errors.title}</div>}
      </div>



      <button className="button is-primary">Submit</button>
    </form>
  )
}

export default Form
