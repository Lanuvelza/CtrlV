import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Divider } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "white",
    minHeight: "100vh",
    textAlign:"center"
  },

  project: {
    textAlign: "center",
    //  height: 250
  },
  fields: {
    display:"flex",
    justifyContent: "space-evenly",
    margin: "auto",
    paddingTop: 20, 
    marginBottom: 20,
    width: "60%",
    height: "auto"
  },
  description: {
    marginTop: 20,
    width: '60%',
    margin: "auto",
    // paddingBottom: 30
  },
  add: {
    textAlign: "center",
    paddingTop: 50
  },
  top: {
    bottomBorder: "10px",
    margin: "auto",
    paddingTop: 80,
    paddingBottom: 20
  },
  divide:{
    marginBottom: 20,
  },
  percent: {
    width: "30%"
  },
  lang: {
    width: "15%"
  },
  dividerLeft:{
    margin: '10px',
    height: 5,
    width: '30%',
    background: '#3f51b5'
  },
  dividerRight:{
    margin: '10px',
    height: 5,
    width: '30%',
    background: '#FF8E53'
  },
  divider1:{
    margin: '10px',
    height: 25,
    width:25,
    borderRadius: 100,
    background: '#3f51b5'
  },
  divider2:{
    margin: '10px',
    height: 25,
    width:25,
    borderRadius: 100,
    background: '#7e6599'
  },
  divider3:{
    margin: '10px',
    height: 25,
    width:25,
    borderRadius: 100,
    background: '#FF8E53'
  },
  dividers:{
    display:'flex',
    justifyContent:'center',
    alignItems: 'center'
  },
  submit:{
    margin:10
  }
}))


export default function Projects(props) {
  const {title, primary_language, primary_language_percent, secondary_language,secondary_language_percent, description, last_updated, id, url } = props

  const [projectInfo, setProjectInfo] = useState({
    title,
    id,
    url,
    primary_language,
    primary_language_percent,
    secondary_language,
    secondary_language_percent,
    description,
    last_updated
  })

  function handleSave(event){
    event.preventDefault();
    // console.log(projectInfo);
    props.updateProject(projectInfo)
  }

  function handleDelete(event) {
    event.preventDefault();
    // console.log("handleDelete", projectInfo);
    props.deleteProject(projectInfo)
  }

  function handleChange(event) {  
    setProjectInfo({...projectInfo, [event.target.name]: event.target.value});
  }
  
  const classes = useStyles(); 
  return (
    <form onSubmit={handleSave} noValidate autoComplete="off">
    <div className={classes.project}>
    <div className={classes.dividers}>
      <Divider orientation='vertical' className={classes.dividerLeft}/>
      <Divider className={classes.divider1}/>
      <Divider className={classes.divider2}/>
      <Divider className={classes.divider3}/>
      <Divider className={classes.dividerRight}/>
      </div>
      <div className={classes.fields}>
        <TextField  name="title" label="Project Title" defaultValue={title} onChange={handleChange} />
        <div>
        <TextField
        name='last_updated'
        label="Last Modified"
        type="date"
        defaultValue={last_updated}
        onChange={handleChange}
        // className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        />
        <br/>
        <TextField name="url" label="Project URL" defaultValue={url} onChange={handleChange} />
        </div>
        < div className={classes.lang}>
          <TextField name="primary_language" label="Primary" defaultValue={primary_language} onChange={handleChange} />
          <TextField  className={classes.percent} name="primary_language_percent" label="%" defaultValue={primary_language_percent} onChange={handleChange} />
        </div>
        < div className={classes.lang}>
          <TextField label="Secondary" name="secondary_language" defaultValue={secondary_language} onChange={handleChange} />
          <TextField className={classes.percent} name="secondary_language_percent" label="%" defaultValue={secondary_language_percent} onChange={handleChange}/>
        </div>
      </div>
      <div className={classes.description}>
        <TextField
          name="description"
          label="Project description"
          multiline
          rows={6}
          defaultValue={description}
          onChange={handleChange}
          placeholder="Tell us about this position..."
          fullWidth="true"
          variant="outlined"
        />
      </div>
      <Button 
      type='submit'
      color='primary'
      variant='outlined'
      className={classes.submit}
      >
        Save
      </Button>
      {props.title && <Button
      variant='outlined'
      color='primary'
      className={classes.submit}
      onClick={handleDelete}>
        Delete
      </Button>}
    </div>          
  </form>
  )
}

 