import React from 'react';
import '../../pages/data-publik-detail/data-publik-detail.styles.scss';

const SubHeader = () => {
  return (
    <div className="button-header-container">
      <Button>
        <h3 className="text">Data Riset</h3>
      </Button>

      <Button>
        <h3 className="text">Buletin</h3>
      </Button>
      <Button>
        <h3 className="text">Kajian Strategis</h3>
      </Button>
      <Button>
        <h3 className="text">UU IKM Vokasi UI</h3>
      </Button>
    </div>
  );
};

export default SubHeader;
