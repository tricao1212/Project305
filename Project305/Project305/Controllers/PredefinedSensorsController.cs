using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Project305.Data;
using Project305.Models;

namespace Project305.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PredefinedSensorsController : ControllerBase
    {
        private readonly Project305Context _context;

        public PredefinedSensorsController(Project305Context context)
        {
            _context = context;
        }

        // GET: api/PredefinedSensors
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PredefinedSensor>>> GetPredefinedSensor()
        {
            return await _context.PredefinedSensor.ToListAsync();
        }

        // GET: api/PredefinedSensors/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PredefinedSensor>> GetPredefinedSensor(int id)
        {
            var predefinedSensor = await _context.PredefinedSensor.FindAsync(id);

            if (predefinedSensor == null)
            {
                return NotFound();
            }

            return predefinedSensor;
        }

        // PUT: api/PredefinedSensors/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPredefinedSensor(int id, PredefinedSensor predefinedSensor)
        {
            if (id != predefinedSensor.Id)
            {
                return BadRequest();
            }

            _context.Entry(predefinedSensor).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PredefinedSensorExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/PredefinedSensors
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PredefinedSensor>> PostPredefinedSensor(PredefinedSensor predefinedSensor)
        {
            _context.PredefinedSensor.Add(predefinedSensor);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPredefinedSensor", new { id = predefinedSensor.Id }, predefinedSensor);
        }

        // DELETE: api/PredefinedSensors/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePredefinedSensor(int id)
        {
            var predefinedSensor = await _context.PredefinedSensor.FindAsync(id);
            if (predefinedSensor == null)
            {
                return NotFound();
            }

            _context.PredefinedSensor.Remove(predefinedSensor);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PredefinedSensorExists(int id)
        {
            return _context.PredefinedSensor.Any(e => e.Id == id);
        }
    }
}
