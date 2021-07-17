import React, { useEffect, useState } from "react";
import { useFormik } from 'formik';
import { Button, Card, Form, Select } from "semantic-ui-react";
import * as Yup from 'yup';
import JobAdvertService from '../services/jobAdvertService';
import WorkTypeService from '../services/workTypeService';
import WorkTimeService from '../services/workTimeService';
import CityService from '../services/cityService';
import JobService from '../services/jobService';
import swal from 'sweetalert';
import { ADVERT_DEADLINE_FIELD_REQUIRED, AVAILABLE_POSITION_FIELD_REQUIRED, CITY_ID_FIELD_REQUIRED, DESCRIPTION_FIELD_REQUIRED, DESCRIPTION_MIN_LENGTH, JOB_ID_FIELD_REQUIRED, MAX_SALARY_FIELD_REQUIRED, MIN_SALARY_FIELD_REQUIRED, WORK_TIME_ID_FIELD_REQUIRED, WORK_TYPE_ID_FIELD_REQUIRED } from "../constants/yuprequired/yupRequiredTexts";
export default function JobAdvertAdd() {
  const ValidationSchema = Yup.object().shape({
    // id: Yup.number().required('Id alanı Zorunlu'),
    jobId: Yup.number().required(JOB_ID_FIELD_REQUIRED),
    cityId: Yup.number().required(CITY_ID_FIELD_REQUIRED),
    //employerId: Yup.number() .required('employerId alanı Zorunlu'),
    workTypeId: Yup.number().required(WORK_TYPE_ID_FIELD_REQUIRED),
    workTimeId: Yup.number().required(WORK_TIME_ID_FIELD_REQUIRED),
    availablePositionCount: Yup.number().required(AVAILABLE_POSITION_FIELD_REQUIRED),
    maxSalary: Yup.number().required(MAX_SALARY_FIELD_REQUIRED),
    minSalary: Yup.number().required(MIN_SALARY_FIELD_REQUIRED),
    description: Yup.string().min(75, DESCRIPTION_MIN_LENGTH).required(DESCRIPTION_FIELD_REQUIRED),
    //releaseDate: Yup.date().required(''),
    advertDeadline: Yup.date().required(ADVERT_DEADLINE_FIELD_REQUIRED),
    //isActive: Yup.boolean()
  });

  const formik = useFormik({
    initialValues: {
      jobId: '',
      cityId: '',
      employerId: '',
      workTypeId: '',
      workTimeId: '',
      availablePositionCount: '',
      maxSalary: '',
      minSalary: '',
      description: '',
      advertDeadline: '',
      isActive: '',
    },
    validationSchema: ValidationSchema,
    onSubmit: (values) => {
      let jobAdvertisementModel = {
        job: {
          id: values.jobId
        },
        employer: {
          userId: 15
        },
        city: {
          id: values.cityId
        },
        workTime: {
          id: values.workTimeId
        },
        workType: {
          id: values.workTypeId
        },
        description: values.description,
        availablePositionCount: values.availablePositionCount,
        advertDeadline: values.advertDeadline,
        minSalary: values.minSalary,
        maxSalary: values.maxSalary,
        active: values.isActive,
      };
      let jobAdvertService = new JobAdvertService();
      values.employerId = 2;
      values.isActive = false;
      swal("Başarılı", "İş ilanınız personellerimiz tarafından kontrol edildiğinde aktive edilecektir.", "success");
      jobAdvertService.add(jobAdvertisementModel);

    },

  });
  // const formik = useFormik({
  //   initialValues: {
  //     id: '',
  //     jobId: '',
  //     cityId: '',
  //     employerId: '',
  //     workTypeId: '',
  //     workTimeId: '',
  //     availablePositionCount: '',
  //     maxSalary: '',
  //     minSalary: '',
  //     description: '',
  //     releaseDate: '',
  //     advertDeadline: '',
  //     isActive: '',
  //   },
  //   validationSchema: Yup.object({
  //     id: Yup.number().required('Id alanı Zorunlu'),
  //     jobId: Yup.number().required('jobId alanı Zorunlu'),
  //     cityId: Yup.number().required('cityId alanı Zorunlu'),
  //     employerId: Yup.number().required('employerId alanı Zorunlu'),
  //     workTypeId: Yup.number().required('workTypeId alanı Zorunlu'),
  //     workTimeId: Yup.number().required('workTimeId alanı Zorunlu'),
  //     availablePositionCount: Yup.number().required('availablePositionCount alanı zorunlu'),
  //     maxSalary: Yup.number().required('maxSalary alanı zorunlu'),
  //     minSalary: Yup.number().required('minSalary alanı zorunlu'),
  //     description: Yup.string().min(75, 'Açıklamanız 75 karakter veya daha fazla olmalıdır'),
  //     releaseDate: Yup.date().required(''),
  //     advertDeadline: Yup.date().required('advertDeadline alanı zorunlu'),
  //     isActive: Yup.boolean(),
  //   }),
  //   onSubmit: values => {
  //     var today = new Date();
  //     var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  //     values.employerId = 2;
  //     values.releaseDate = date;
  //     values.isActive = false;
  //     alert("Eklendi")
  //     jobAdvertService.add(values).then();
  //   },
  // })
  const [workTimes, setWorkTimes] = useState([]);
  const [workTypes, setWorkTypes] = useState([]);
  const [cities, setCities] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    let workTimeService = new WorkTimeService();
    let workTypeService = new WorkTypeService();
    let cityService = new CityService();
    let jobService = new JobService();

    workTimeService.getWorkTime().then(result => setWorkTimes(result.data.data));
    workTypeService.getWorkType().then(result => setWorkTypes(result.data.data));
    cityService.getCities().then(result => setCities(result.data.data));
    jobService.getJobs().then(result => setJobs(result.data.data));
  }, [])

  return (
    <div>
      <Card fluid >
        <Card.Content header='İş ilanı Ekle' />
        <Card.Content>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group widths="equal">
              <Form.Field label=" İş açıklama" control="text">
                <input type="text"
                  id="description"
                  name="description"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.description}
                  placeholder="İş açıklaması" />
                {formik.errors.description && formik.touched.description && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.description}
                  </div>
                )}
              </Form.Field>

            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Field label="En düşük maaş" control="number">
                <input
                  type="number"
                  id="minSalary"
                  name="minSalary"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.minSalary}
                  placeholder="Maaş aralığı minimum"
                >

                </input>
                {formik.errors.minSalary && formik.touched.minSalary && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.minSalary}
                  </div>
                )}
              </Form.Field>

              <Form.Field label="En yüksek maaş" control="number">
                <input
                  type="number"
                  id="maxSalary"
                  name="maxSalary"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.maxSalary}
                  placeholder="Maaş aralığı maksimum"
                >

                </input>
                {formik.errors.maxSalary && formik.touched.maxSalary && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.maxSalary}
                  </div>
                )}
              </Form.Field>
              </Form.Group>
              <Form.Group widths='equal'>

              
              <Form.Field label="Uygun pozisyon sayısı" control="number">
                <input
                  type="number"
                  id="availablePositionCount"
                  name="availablePositionCount"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.availablePositionCount}
                  placeholder="Maaş aralığı maksimum"
                >

                </input>
                {formik.errors.availablePositionCount && formik.touched.availablePositionCount && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.availablePositionCount}
                  </div>
                )}
              </Form.Field>
              </Form.Group>
            
            <Form.Group widths='equal' opt>
              <Form.Field  >
                <label>Şehir</label>
                <select label="Şehir"
                  id="cityId"
                  onChange={formik.handleChange}
                  value={formik.values.cityId}
                >
                  <option value="">--</option>
                  {

                    cities.map(city => (
                      <option
                        key={city.id}
                        value={city.id}
                      >

                        {city.name}</option>
                    ))
                  }
                </select>


                {formik.errors.cityId && formik.touched.cityId && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.cityId}
                  </div>
                )}
              </Form.Field>
            </Form.Group>
            <Form.Group widths='equal' opt>
              <Form.Field >
                <label>Çalışma Süresi</label>
                <select
                  id="workTimeId"
                  onChange={formik.handleChange}
                  value={formik.values.workTimeId}
                >
                  <option value="">--</option>
                  {
                    workTimes.map(workTime => (
                      <option
                        key={workTime.id}
                        value={workTime.id}
                      >
                        {workTime.name}</option>
                    ))
                  }
                </select>

                {formik.errors.workTimeId && formik.touched.workTimeId && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.workTimeId}
                  </div>
                )}
              </Form.Field>

              <Form.Field >
                <label>Çalışma Tipi</label>
                <select
                  id="workTypeId"
                  onChange={formik.handleChange}
                  value={formik.values.workTypeId}
                >
                  <option value="">--</option>
                  {
                    workTypes.map(workType => (
                      <option
                        key={workType.id}
                        value={workType.id}
                      >
                        {workType.name}</option>
                    ))
                  }
                </select>

                {formik.errors.workTypeId && formik.touched.workTypeId && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.workTypeId}
                  </div>
                )}

              </Form.Field>
            </Form.Group>
            <Form.Group widths='equal' opt>
            <Form.Field control='date' label="Son tarih" >
              <input type="date"
                id="advertDeadline"
                name="advertDeadline"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.advertDeadline}
              />
              {formik.errors.advertDeadline && formik.touched.advertDeadline && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.advertDeadline}
                </div>
              )}
            </Form.Field>

            <Form.Field >
              <label>İş Seçin</label>
              <select
                id="jobId"
                onChange={formik.handleChange}
                value={formik.values.jobId}
              >
                <option value="">--</option>
                {
                  jobs.map(job => (
                    <option
                      key={job.id}
                      value={job.id}
                    >
                      {job.title}</option>
                  ))
                }
              </select>
              {formik.errors.jobId && formik.touched.jobId && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.jobId}
                </div>
              )}
            </Form.Field>
            </Form.Group>
           


          <Button type='submit'>Ekle</Button>
          </Form>
        </Card.Content>
      </Card>
    </div >
  )
}
