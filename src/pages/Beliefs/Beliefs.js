import React from 'react'
import './Beliefs.css'
// import wv
const Beliefs = () => {
  return (
    <div className='beliefs-page page'>
      <div className='page-hero'>
        <h1 className='page-hero-title'>What We Believe</h1>
      </div>
      <div className='statement-of-faith'>
        <h1 className='title'>Statement Of Faith</h1>
        <p className='section-text'>
          There are eight fundamental, doctrinal beliefs that have characterized
          Bible believing churches throughout the ages. These beliefs are how we
          trace our lineage back to the time of Jesus Christ. The following
          beliefs are based directly on the Word of God, and have passed from
          one generation to the next.
        </p>
      </div>
      <section className='beliefs-body'>
        <div className='statement'>
          <h3 className='statement-title'>
            1. We believe that the <span className='emph'>BIBLE</span> is the
            final authority for all faith and practice.
          </h3>
          <p className='statement-text section-text'>
            We believe in a verbal plenary inspiration. That is, God gave the
            actual words of the Bible (Verbal), and the entire Bible is from Him
            (plenary).
          </p>
          <p className='verse'>
            All scripture is given by inspiration of God, and is profitable for
            doctrine, for reproof, for correction, for instruction in
            righteousness
            <span className='ref'>2 Tim. 3:16</span>
          </p>
        </div>
        <div className='statement'>
          <h3 className='statement-title'>
            2. We believe in the <span className='emph'>AUTONOMY</span> of the
            Local church.
          </h3>
          <p className='statement-text section-text'>
            That is, each church is independently governed under God. This is
            the pattern of the New Testament church throughout all of Scripture.
          </p>
          <p className='verse'>
            (Acts 1:21-26; Acts 6; 1 Cor. 5; Acts 13:1-3; Acts 15.)
          </p>
        </div>
        <div className='statement'>
          <h3 className='statement-title'>
            3. We believe in the <span className='emph'>PRIESTHOOD</span> of all
            believers.
          </h3>
          <p className='statement-text section-text'>
            Jesus is our High Priest who gave each and every believer the
            privilege to go before the throne of God without an earthly
            intercessor.
          </p>
          <p className='verse'>
            But ye are a chosen generation, a royal priesthood, an holy nation,
            a peculiar people; that ye should shew forth the praises of him who
            hath called you out of darkness into his marvelous light:
            <span className='ref'>1 Peter 2:9</span>
          </p>
        </div>
        <div className='statement'>
          <h3 className='statement-title'>
            4. We believe that there are{' '}
            <span className='emph'>TWO OFFICES</span>.
          </h3>
          <p className='statement-text section-text'>
            Pastors, whose qualifications and duties are found in{' '}
            <span className='ref-text'>1 Timothy 3:1-7</span>. They are to rule,
            or lead the flock (<span className='ref-text'>Hebrews 13:7</span>).
            Deacons, whose qualifications and duties are found in 1 Timothy
            3:8-13. They are to serve the flock (
            <span className='ref-text'>Acts 6</span>).
          </p>
        </div>
        <div className='statement'>
          <h3 className='statement-title'>
            5. We believe that each person has{' '}
            <span className='emph'>INDIVIDUAL SOUL</span> liberty and
            responsibility.
          </h3>
          <p className='statement-text section-text'>
            Each person is responsible for what the Bible teaches.
          </p>
          <p className='verse'>
            Then Peter and the other apostles answered and said, We ought to
            obey God rather than men.
            <span className='ref'>Acts 5:29</span>
          </p>
        </div>
        <div className='statement'>
          <h3 className='statement-title'>
            6. We believe in the <span className='emph'>SECURITY</span> of the
            believer.
          </h3>
          <p className='statement-text section-text'>
            We are saved from death and Hell by the power of God for all
            eternity.
          </p>
          <p className='verse'>
            My sheep hear my voice, and I know them, and they follow me: 28 And
            I give unto them eternal life; and they shall never perish, neither
            shall any man pluck them out of my hand.
            <span className='ref'>John 10:27-28</span>
          </p>
        </div>
        <div className='statement'>
          <h3 className='statement-title'>
            7. We believe there are <span className='emph'>TWO ORDINANCES</span>{' '}
            of the local church. Baptism and Communion.
          </h3>
          <p className='statement-text section-text'>
            <strong>Baptism</strong> is the immersion of a believer in water to
            show his faith in, and identity with Christ in His death, burial,
            resurrection and the Spirit-filled life. It is a symbol and
            demonstration on the conversion experience.
          </p>
          <p className='verse'>
            Go ye therefore, and teach all nations, baptizing them in the name
            of the Father, and of the Son, and of the Holy Ghost.
            <span className='ref'>Matthew 28:19</span>
          </p>
          <p className='statement-text section-text'>
            <strong>Communion</strong> is a memorial of the atoning death,
            burial, resurrection, and personal return of Christ, and that only
            born-again believers are to participate in it. We believe that the
            elements, bread and the juice of the grape, are symbols of Christ’s
            body and blood and have no merit in themselves.
          </p>
          <p className='verse'>
            And when he had given thanks, he brake it, and said, Take, eat: this
            is my body, which is broken for you: this do in remembrance of me.
            <span className='ref'>1 Cor. 11:24</span>
          </p>
        </div>
        <div className='statement'>
          <h3 className='statement-title'>
            8.We believe in the <span className='emph'>SEPARATION</span> of the
            state from the church.
          </h3>
          <p className='statement-text section-text'>
            We are to obey the laws of the Government.
          </p>
          <p className='verse'>
            Submit yourselves to every ordinance of man for the Lord's sake:
            whether it be to the king, as supreme; 14 Or unto governors, as unto
            them that are sent by him for the punishment of evildoers, and for
            the praise of them that do well.
            <span className='ref'>1 Peter 2:13-14</span>
          </p>
          <p className='statement-text section-text'>
            However, we must obey God over the Government.
          </p>
          <p className='verse'>
            Then Peter and the other apostles answered and said, We ought to
            obey God rather than men.
            <span className='ref'>Acts 5:29</span>
          </p>
        </div>
      </section>
    </div>
  )
}

export default Beliefs
