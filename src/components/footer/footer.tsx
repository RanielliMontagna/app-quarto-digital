import { memo } from 'react';
import { email, instagram, linkedin, site, twitter } from 'shared';
import { Copyright, DivFooter, RedeSocial, RedesSociais } from './footer.styles';

const Footer = () => {
  return (
    <DivFooter id="footer">
      <div style={{ display: 'flex', alignItems: 'center', fontSize: '32px' }}>
        <div className="quarto">Quarto</div>
        <div className="digital">Digital</div>
      </div>
      <RedesSociais>
        <RedeSocial onClick={() => window.open(instagram, '_blank')}>INSTAGRAM</RedeSocial>
        <RedeSocial onClick={() => window.open(twitter, '_blank')}>TWITTER</RedeSocial>
        <RedeSocial onClick={() => window.open(site, '_blank')}>SITE</RedeSocial>
        <RedeSocial onClick={() => window.open(linkedin)}>LINKEDIN</RedeSocial>
        <RedeSocial onClick={() => window.open(email, '_blank')}>EMAIL</RedeSocial>
      </RedesSociais>
      <Copyright>
        Copyright 2022 – Ranielli Montagna.
        <span>Todos os direitos reservados.</span>
      </Copyright>
    </DivFooter>
  );
};

export default memo(Footer);
