import React from 'react';
import { Col } from 'react-bootstrap';
import './contact.css';


const Contact = () => {
  return (
    <section id='contact' className='section contact' data-section='section6'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='section-heading'>
              <h2>Ecrire Votre Réclamation ICI</h2>
            </div>
          </div>
          <div className='col-md-6'>
            <form id='contact'>
              <div className='row'>
                <div className='col-md-6'>
                  <fieldset>
                    <input
                      name='name'
                      type='text'
                      className='form-control'
                      id='name'
                      placeholder='Nom Et Prénom'
                      required
                    />
                  </fieldset>
                </div>
                <div className='col-md-6'>
                  <fieldset>
                    <input
                      name='email'
                      type='text'
                      className='form-control'
                      id='email'
                      placeholder=' Email'
                      required
                    />
                  </fieldset>
                </div>
                <div className='col-md-12'>
                  <fieldset>
                    <textarea
                      name='message'
                      rows={6}
                      className='form-control'
                      id='message'
                      placeholder='Votre Réclamation ...'
                      required
                      defaultValue={''}
                    />
                  </fieldset>
                </div>
                <div className='col-md-12'>
                  <fieldset>
                    <button type='submit' id='form-submit' className='button'>
                      Envoyer
                    </button>
                  </fieldset>
                </div>
              </div>
            </form>
          </div>
          <Col md={6}>
            <div id='map'>
              <iframe
              title='map'
                src='https://maps.google.com/maps?q=La%20Poste%20Tunis%20Mohamed%20V&t=&z=13&ie=UTF8&iwloc=&output=embed'
                width='100%'
                height='422px'
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>
          </Col>
        </div>
      </div>
    </section>
  );
};

export default Contact;
