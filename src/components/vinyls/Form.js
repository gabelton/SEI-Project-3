import React from 'react'
import { withRouter } from 'react-router-dom'

const Form = ({ handleChange, handleSubmit, data, errors}) => {
  return (
    <section className="section">
      <div className="container is-fluid">
        <div className="formBox">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Artist</label>
              <div className="control">
                <input
                  className="input"
                  name="artist"
                  placeholder="eg: The Kinks"
                  onChange={handleChange}
                  value={data.artist || ''}
                />
              </div>
              {errors.artist && <div className="help is-danger">{errors.artist}</div>}
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
                  className="input"
                  name="image"
                  placeholder="eg: https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/theKinks.jpg"
                  onChange={handleChange}
                  value={data.image || ''}
                />


              </div>
              {errors.image && <div className="help is-danger">{errors.image}</div>}
            </div>
            <div className="field">
              <label className="label">Release Year</label>
              <div className="control">

                <input
                  className="input"
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
                    <option value="Rock">Rock</option>
                    <option value="Jazz">Jazz</option>
                    <option value="Hip-Hop">Hip-Hop</option>
                    <option value="Country">Country</option>
                    <option value="Alternative">Alternative</option>
                    <option value="Pop">Pop</option>
                    <option value="Electronic">Electronic</option>
                    <option value="Reggae">Reggae</option>
                    <option value="Folk">Folk</option>
                    <option value="RnB">RnB</option>
                    <option value="Metal">Metal</option>
                    <option value="Classical">Classical</option>
                  </select>
                </div>
                {errors.genre && <div className="help is-danger">{errors.genre}</div>}
              </div>
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
            </div>
            <div className="field">
              <label className="label">Length</label>
              <div className="control">
                <input
                  className="input"
                  name="length"
                  placeholder="eg: 45:33"
                  onChange={handleChange}
                  value={data.length || ''}
                />
              </div>
              {errors.length && <div className="help is-danger">{errors.length}</div>}
            </div>
            <div className="field">
              <label className="label">Notes</label>
              <div className="control">
                <input
                  className="input"
                  name="notes"
                  onChange={handleChange}
                  value={data.notes || ''}
                />
              </div>
              {errors.notes && <div className="help is-danger">{errors.notes}</div>}
            </div>
            <div className="field">
              <label className="label">Label</label>
              <div className="control">
                <input
                  className="input"
                  name="label"
                  placeholder="eg: Pye"
                  onChange={handleChange}
                  value={data.label || ''}
                />
              </div>
              {errors.label && <div className="help is-danger">{errors.label}</div>}
            </div>
            <div className="field">
              <label className="label">Size</label>
              <div className="control">
                <div className="select is-fullwidth">
                  <select
                    name="size"
                    onChange={handleChange}
                    value={data.size || ''}
                  >
                    <option value="" disabled>Please choose...</option>
                    <option value='7'> 7 inch </option>
                    <option value='10'>10 inch</option>
                    <option value='12'>12 inch</option>
                  </select>
                </div>
              </div>
              {errors.size && <div className="help is-danger">{errors.size}</div>}
            </div>
            <div className="field">
              <label className="label">Format</label>
              <div className="control">
                <div className="select is-fullwidth">
                  <select
                    name="format"
                    onChange={handleChange}
                    value={data.format || ''}
                  >
                    <option value="" disabled>Please choose...</option>
                    <option value='1LP'>1LP</option>
                    <option value='2LP'>2LP</option>
                    <option value='3LP'>3LP</option>
                    <option value='4LP'>4LP</option>
                    <option value='Box Set'>Box Set</option>
                  </select>
                </div>
              </div>
              {errors.format && <div className="help is-danger">{errors.format}</div>}
            </div>
            <div className="field">
              <label className="label">Speed</label>
              <div className="control">
                <div className="select is-fullwidth">
                  <select
                    name="speed"
                    onChange={handleChange}
                    value={data.speed || ''}
                  >
                    <option value="" disabled>Please choose...</option>
                    <option value='33 1/3 RPM'>33 1/3 RPM</option>
                    <option value='45 RPM'>45 RPM</option>
                    <option value='78 RPM'>78 RPM</option>
                  </select>
                </div>
              </div>
              {errors.speed && <div className="help is-danger">{errors.speed}</div>}
            </div>
            <div className="field">
              <label className="label">Catalogue Number</label>
              <div className="control">
                <input
                  className="input"
                  name="catalogueNumber"
                  onChange={handleChange}
                  value={data.catalogueNumber || ''}
                />
              </div>
              {errors.catalogueNumber && <div className="help is-danger">{errors.catalogueNumber}</div>}
            </div>
            <div className="field">
              <label className="label">Barcode</label>
              <div className="control">
                <input
                  className="input"
                  name="barcode"
                  onChange={handleChange}
                  value={data.barcode || ''}
                />
              </div>
              {errors.barcode && <div className="help is-danger">{errors.barcode}</div>}
            </div>

            <button className="button is-dark">Submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default withRouter(Form)
