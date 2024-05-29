using Microsoft.AspNetCore.Mvc;
using Project305.Business.AccountService;
using Project305.Business.PatientService;
using Project305.Domain.Models;

namespace Project305.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientController : ControllerBase
    {
        private IPatientService _patientService;
        public PatientController(IPatientService patientService)
        {
            _patientService = patientService;
        }

        [HttpGet]
        [Route("All", Name = "GetAllPatients")]
        public async Task<IActionResult> GetAllPatients()
        {
            var res = await _patientService.GetAll();
            var patients = new List<Patient>(res.Data);
            if (res.IsSuccess is false)
                return Ok(res);

            return Ok(patients);
        }

        [HttpGet]
        [Route("Id", Name = "GetPatientById")]
        public async Task<IActionResult> GetPatientById(int Id)
        {
            var res = await _patientService.GetById(Id);

            if (res.IsSuccess is false)
                return Ok(res);

            return Ok(res);
        }

        [HttpPost]
        public async Task<IActionResult> CreatePatient(Patient patient)
        {
            var res = await _patientService.CreateAsync(patient);

            if (res.IsSuccess is false)
                return Ok(res);

            return Ok(res);
        }

        [HttpDelete]
        [Route("Delete", Name = "DeletePatient")]
        public async Task<IActionResult> DeletePatient(int Id)
        {
            var res = await _patientService.DeleteAsync(Id);

            if (res.IsSuccess is false)
                return Ok(res);

            return Ok(res);
        }
    }
}
