import "./Lesen.css";

function Lesen() {
    return (
      <main className="container mt-3 animate__animated animate__fadeIn">
        <h1>Lesen</h1>
        <p>Rujuk kod sumber di <a href="https://github.com/irfanzainudin/pantunis">repositori <i className="bi bi-github"></i> Github rasmi Pantunis</a>.</p>
        <article id="lesen" className="container w-75">
            <p>
                Copyright {new Date().getFullYear()} <i className="bi bi-c-circle"></i> Perisiana
            </p>
            <p>
                Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
            </p>
            <p>
                The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
            </p>
            <p>
                THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
            </p>
        </article>
      </main>
    );
  }
  
export default Lesen;