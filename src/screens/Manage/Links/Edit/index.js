import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../../Layout/Manage";
import { linkGet } from "../../../../actions/LinkActions";
import { connect } from "react-redux";
import FormGroup from "../../../../Components/FormGroup";
import FormCheck from "../../../../Components/FormCheck";

const Edit = ({ link, linkGet }) => {
  const { id } = useParams();

  useEffect(() => {
    linkGet(id);
  }, [id, linkGet]);

  console.log("*** Edit.id", id);
  console.log("*** Edit.link", link);
  return (
    <Layout>
      <h1>Edit Link</h1>
      <div>
        <form>
          <FormGroup label="Label" name="label" data={link} type="text" />
          <FormGroup label="Url" name="url" data={link} type="text" />
          <FormCheck label="Is Social" name="isSocial" data={link} />
          <div>
            <button className="btn btn-primary btn-round">Submit</button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return { link: state.link.link };
};

export default connect(mapStateToProps, { linkGet })(Edit);
