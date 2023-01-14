import React, { useState, useEffect } from 'react';

function FetchHTML() {
  const [html, setHTML] = useState('');

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://flatljus.se/.netlify/functions/getLatestUpdate');
      const data = await res.text();
      setHTML(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <p>{html}</p>
    </div>
  );
}

export default FetchHTML;